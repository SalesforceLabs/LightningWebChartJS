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
import MicroTaskHandler from 'c/microTaskHandler';

export default class BaseChart extends LightningElement {
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

  get chartStyle() {
    return `width: ${this.width}; height: ${this.height}; ${this.stylecss ||
      ''}`;
  }

  get ariaLabel() {
    return `${this._ariaLabel}`;
  }

  _baseChartInitialized = false;
  _chartjsLoaded = false;

  constructor() {
    super();
    this._configService = new ChartConfigService();
    this._details = null;
    this._chart = null;
    this._mt = new MicroTaskHandler();
    this._mt.registerCallback(() => this.renderChart());
    const mt = this._mt;
    const reactivityHandler = {
      set: function(obj, prop, value) {
        obj[prop] = value;
        mt.waitNextTask();
        return true;
      }
    };
    this._payload = new Proxy({}, reactivityHandler);
    this._ariaLabel = `${this.constructor.type} chart`; // default accessibility title
  }

  connectedCallback() {
    this.addEventListener(OPTION_EVENT_NAME, evt => {
      evt.stopPropagation();
      const { payload, option } = evt.detail;
      if (option === ATTRIBUTE_DATA) {
        this._details = payload;
      } else {
        // get title to set the accessibility
        if (option === ATTRIBUTE_TITLE) {
          this._ariaLabel = payload.text;
        }
        this._configService.updateConfig(payload, option);
      }
      this._mt.waitNextTask();
    });

    this.addEventListener(DISCONNECT_EVENT_NAME, evt => {
      evt.stopPropagation();
      const { payload, option } = evt.detail;
      if (option === ATTRIBUTE_DATA) {
        this._details = null;
        if (this._chart) {
          this._chart.destroy();
        }
      } else {
        // reset title to set the accessibility
        if (option === ATTRIBUTE_TITLE) {
          this._ariaLabel = `${this.constructor.type} chart`;
        }
        this._configService.removeConfig(payload, option);
        this._mt.waitNextTask();
      }
    });
  }

  renderedCallback() {
    if (this._baseChartInitialized) {
      return;
    }
    this._baseChartInitialized = true;

    loadScript(this, ChartJS).then(() => {
      this._chartjsLoaded = true;
      this._mt.waitNextTask();
    });
  }

  getCanvas() {
    const canvas = document.createElement('canvas');
    this.template.querySelector('div').appendChild(canvas);
    return canvas.getContext('2d');
  }

  renderChart() {
    if (!this._chartjsLoaded || !this._details) return;

    this._configService.updateConfig(this._payload, null);
    if (!this._chart) {
      // eslint-disable-next-line no-undef
      this._chart = new Chart(this.getCanvas(), {
        type: this.constructor.type,
        data: this._details,
        options: this._configService.getConfig()
      });
    } else {
      this._chart.data = this._details;
      this._chart.options = this._configService.getConfig();
      this._chart.update();
    }
  }
}
