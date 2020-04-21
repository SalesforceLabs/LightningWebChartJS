import { LightningElement, api } from 'lwc';
import ChartJS from '@salesforce/resourceUrl/chartjs_v280';
import { loadScript } from 'lightning/platformResourceLoader';
import { sanitize } from 'c/utils';

import {
  ATTRIBUTE_DATA,
  ATTRIBUTE_TITLE,
  OPTION_EVENT_NAME,
  DISCONNECT_EVENT_NAME
} from 'c/constants';
import ChartConfigService from 'c/chartConfigService';
import ReactivityManager from 'c/reactivityManager';

export default class Chart extends LightningElement {
  @api width;
  @api height;
  @api stylecss;

  @api
  get responsive() {
    return this._payload.responsive;
  }
  set responsive(v) {
    this._payload.responsive = Boolean(v);
  }

  @api
  get responsiveanimationduration() {
    return this._payload.responsiveAnimationDuration;
  }
  set responsiveanimationduration(v) {
    this._payload.responsiveAnimationDuration = v;
  }

  @api
  get maintainaspectratio() {
    return this._payload.maintainAspectRatio;
  }
  set maintainaspectratio(v) {
    this._payload.maintainAspectRatio = Boolean(v);
  }

  @api
  get aspectratio() {
    return this._payload.aspectRatio;
  }
  set aspectratio(v) {
    this._payload.aspectRatio = v;
  }

  @api
  get callbackResize() {
    return this._payload.onResize;
  }
  set callbackResize(v) {
    this._payload.onResize = v;
  }

  @api
  get devicepixelratio() {
    return this._payload.pointHoverBorderColor;
  }
  set devicepixelratio(v) {
    this._payload.pointHoverBorderColor = v;
  }

  @api
  get events() {
    return this._payload.events;
  }
  set events(v) {
    this._payload.events = sanitize(v);
  }

  @api
  get callbackClick() {
    return this._payload.onClick;
  }
  set callbackClick(v) {
    this._payload.onClick = v;
  }

  @api
  get callbackHover() {
    return this._payload.onHover;
  }
  set callbackHover(v) {
    this._payload.onHover = v;
  }

  @api
  get type() {
    return this._type;
  }
  set type(v) {
    if (v !== this._type) {
      this._type = v;
      this.ariaLabel =
        this._payload[ATTRIBUTE_TITLE] && this._payload[ATTRIBUTE_TITLE].text
          ? this._payload[ATTRIBUTE_TITLE].text
          : `${this._type} chart`;
      this.destroyChart();
      this._reactivityManager.throttleRegisteredJob();
    }
  }

  get chartStyle() {
    return `width: ${this.width}; height: ${this.height}; ${this.stylecss ||
      ''}`;
  }

  ariaLabel;

  @api
  destroyChart() {
    if (this._chart) {
      this._chart.destroy();
    }
  }

  @api
  updateChart(duration, lazy) {
    if (this._chart) {
      this._chart.update(duration, lazy);
    }
  }

  @api
  resetChart() {
    if (this._chart) {
      this._chart.reset();
    }
  }

  @api
  renderChart(duration, lazy) {
    if (this._chart) {
      this._chart.render(duration, lazy);
    }
  }

  @api
  stopChart() {
    if (this._chart) {
      this._chart.stop();
    }
    return this;
  }

  @api
  resizeChart() {
    if (this._chart) {
      this._chart.resize();
    }
    return this;
  }

  @api
  clearChart() {
    if (this._chart) {
      this._chart.clear();
    }
    return this;
  }

  @api
  toBase64ImageChart() {
    if (this._chart) {
      return this._chart.toBase64Image();
    }
    return null;
  }

  @api
  generateLegendChart() {
    if (this._chart) {
      return this._chart.generateLegend();
    }
    return null;
  }

  @api
  getElementAtEventChart(e) {
    if (this._chart) {
      return this._chart.getElementAtEvent(e);
    }
    return null;
  }

  @api
  getElementsAtEventChart(e) {
    if (this._chart) {
      return this._chart.getElementsAtEvent(e);
    }
    return null;
  }

  @api
  getDatasetAtEventChart(e) {
    if (this._chart) {
      return this._chart.getDatasetAtEvent(e);
    }
    return null;
  }

  @api
  getDatasetMetaChart(index) {
    if (this._chart) {
      return this._chart.getDatasetMeta(index);
    }
    return null;
  }

  constructor() {
    super();
    this._baseChartInitialized = false;
    this._chartjsLoaded = false;
    this._configService = new ChartConfigService();
    this._details = null;
    this._chart = null;
    this._reactivityManager = new ReactivityManager();
    this._reactivityManager.registerJob(() => this.drawChart());
    this._payload = this._reactivityManager.getReactivityProxy();
  }

  connectedCallback() {
    this.addEventListener(OPTION_EVENT_NAME, evt => {
      evt.stopPropagation();
      this._handleOption(evt.detail);
    });

    this.addEventListener(DISCONNECT_EVENT_NAME, evt => {
      evt.stopPropagation();
      this._handleDisconnect(evt.detail);
    });
  }

  renderedCallback() {
    if (this._baseChartInitialized) {
      return;
    }
    this._baseChartInitialized = true;

    loadScript(this, ChartJS).then(() => {
      this._chartjsLoaded = true;
      this._reactivityManager.throttleRegisteredJob();
    });
  }

  getCanvas() {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
      this.template.querySelector('div').appendChild(this._canvas);
    }
    return this._canvas.getContext('2d');
  }

  drawChart() {
    if (!this._chartjsLoaded || !this._details) return;

    this._configService.updateConfig(this._payload, null);
    if (!this._chart) {
      // eslint-disable-next-line no-undef
      this._chart = new window.Chart(this.getCanvas(), {
        type: this._type,
        data: this._details,
        options: this._configService.getConfig()
      });
    } else {
      this._chart.data = this._details;
      this._chart.options = this._configService.getConfig();
      this._chart.update();
    }
  }

  _handleOption(detail) {
    const { payload, option } = detail;
    if (option === ATTRIBUTE_DATA) {
      this._details = payload;
    } else {
      // get title to set the accessibility
      if (option === ATTRIBUTE_TITLE) {
        this.ariaLabel = payload.text;
      }
      this._configService.updateConfig(payload, option);
    }
    this._reactivityManager.throttleRegisteredJob();
  }

  _handleDisconnect(detail) {
    const { payload, option } = detail;
    if (option === ATTRIBUTE_DATA) {
      this._details = null;
      this.destroyChart();
    } else {
      // reset title to set the accessibility
      if (option === ATTRIBUTE_TITLE) {
        this.ariaLabel = `${this._type} chart`;
      }
      this._configService.removeConfig(payload, option);
      this._reactivityManager.throttleRegisteredJob();
    }
  }
}
