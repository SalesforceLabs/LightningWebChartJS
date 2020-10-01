import { LightningElement, api } from 'lwc';
import ChartJS from '@salesforce/resourceUrl/chartjs_v280';
import { loadScript } from 'lightning/platformResourceLoader';
import { parseBoolean, sanitize } from 'c/utils';
import { nanoid } from 'c/nanoid';

import {
  ATTRIBUTE_DATA,
  ATTRIBUTE_TITLE,
  OPTION_EVENT_NAME,
  DISCONNECT_EVENT_NAME,
  ERROR_EVENT_NAME
} from 'c/constants';
import ChartConfigService from 'c/chartConfigService';
import ReactivityManager from 'c/reactivityManager';

export default class Chart extends LightningElement {
  @api width;
  @api height;
  @api stylecss;

  _uuid = nanoid(11);
  @api
  get uuid() {
    return this._uuid;
  }
  set uuid(v) {
    this._uuid = v;
  }

  // callback used for knowing when chart js is loaded in the dom
  // convenient to define new charts, new axes type and new plugins
  _chartjsLoadedCallback;
  @api
  get chartjsloadedCallback() {
    return this._chartjsLoadedCallback;
  }
  set chartjsloadedCallback(v) {
    this._chartjsLoadedCallback = v;
    this._callChartjsloadedCallback();
  }

  _canvasOnchange;
  @api
  get canvasOnchange() {
    return this._canvasOnchange;
  }
  set canvasOnchange(v) {
    // avoid leak
    this.getCanvas().removeEventListener('mouseover', this._canvasOnchange);
    this._canvasOnchange = v;
    this.getCanvas().addEventListener('change', this._canvasOnchange);
  }
  _canvasOnclick;
  @api
  get canvasOnclick() {
    return this._canvasOnclick;
  }
  set canvasOnclick(v) {
    // avoid leak
    this.getCanvas().removeEventListener(
      'mouseover',
      this._canvas_canvasOnclickOnmouseover
    );
    this._canvasOnclick = v;
    this.getCanvas().addEventListener('click', this._canvasOnclick);
  }
  _canvasOnmouseover;
  @api
  get canvasOnmouseover() {
    return this._canvasOnmouseover;
  }
  set canvasOnmouseover(v) {
    // avoid leak
    this.getCanvas().removeEventListener('mouseover', this._canvasOnmouseover);
    this._canvasOnmouseover = v;
    this.getCanvas().addEventListener('mouseover', this._canvasOnmouseover);
  }
  _canvasOnmouseout;
  @api
  get canvasOnmouseout() {
    return this._canvasOnmouseout;
  }
  set canvasOnmouseout(v) {
    // avoid leak
    this.getCanvas().removeEventListener('mouseover', this._canvasOnmouseout);
    this._canvasOnmouseout = v;
    this.getCanvas().addEventListener('mouseout', this._canvasOnmouseout);
  }

  @api
  get responsive() {
    return this._payload.responsive;
  }
  set responsive(v) {
    this._payload.responsive = parseBoolean(v);
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
    this._payload.maintainAspectRatio = parseBoolean(v);
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
      // Change aria Label if title is not set
      this.ariaLabel =
        this._payload[ATTRIBUTE_TITLE] && this._payload[ATTRIBUTE_TITLE].text
          ? this._payload[ATTRIBUTE_TITLE].text
          : `${this._type} chart`;
      // rebuild the chart
      this.destroyChart();
      this._reactivityManager.throttleRegisteredJob();
    }
  }

  get chartStyle() {
    return `width: ${this.width}; height: ${this.height}; ${
      this.stylecss || ''
    }`;
  }

  ariaLabel;

  @api
  destroyChart() {
    if (this._chart) {
      this._chart.destroy();
      this._chart = null;
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
    let res = null;
    if (this._chart) {
      res = this._chart.toBase64Image();
    }
    return res;
  }

  @api
  generateLegendChart() {
    let res = null;
    if (this._chart) {
      res = this._chart.generateLegend();
    }
    return res;
  }

  @api
  getElementAtEventChart(e) {
    let res = null;
    if (this._chart) {
      res = this._chart.getElementAtEvent(e);
    }
    return res;
  }

  @api
  getElementsAtEventChart(e) {
    let res = null;
    if (this._chart) {
      res = this._chart.getElementsAtEvent(e);
    }
    return res;
  }

  @api
  getDatasetAtEventChart(e) {
    let res = null;
    if (this._chart) {
      res = this._chart.getDatasetAtEvent(e);
    }
    return res;
  }

  @api
  getDatasetMetaChart(index) {
    let res = null;
    if (this._chart) {
      res = this._chart.getDatasetMeta(index);
    }
    return res;
  }

  constructor() {
    super();
    this._baseChartInitialized = false;
    this._chartjsLoaded = false;
    this._configService = new ChartConfigService(); // create the chartConfigService delegate
    this._details = null;
    this._chart = null;
    this._reactivityManager = new ReactivityManager(); // store reactivity manager in case need to throttle manually
    this._reactivityManager.registerJob(() => this.drawChart()); // register drawChqart
    this._payload = this._reactivityManager.getReactivityProxy(); // use reactivity manager proxy
  }

  // Add event listener on children option and disconnect event
  connectedCallback() {
    this.addEventListener(
      OPTION_EVENT_NAME,
      this._listenerHandlers.handleOption
    );
    this.addEventListener(
      DISCONNECT_EVENT_NAME,
      this._listenerHandlers.handleDisconnect
    );
  }

  // Remove event listener on children option and disconnect event
  disconnectedCallback() {
    this.removeEventListener(
      OPTION_EVENT_NAME,
      this._listenerHandlers.handleOption
    );
    this.removeEventListener(
      DISCONNECT_EVENT_NAME,
      this._listenerHandlers.handleDisconnect
    );
    this.destroyChart();
  }

  // load Chart.js library stored in static resource
  renderedCallback() {
    if (this._baseChartInitialized) {
      return;
    }
    this._baseChartInitialized = true;

    loadScript(this, ChartJS).then(
      () => {
        this._chartjsLoaded = true;
        this._callChartjsloadedCallback();
        this._reactivityManager.throttleRegisteredJob();
      },
      (reason) => {
        this.errorCallback(reason);
      }
    );
  }

  // dispatch error event in case of error
  errorCallback(error, stack) {
    this.destroyChart();
    this.dispatchEvent(
      new CustomEvent(ERROR_EVENT_NAME, {
        bubbles: true,
        detail: {
          uuid: this.uuid,
          error: error,
          stack: stack
        }
      })
    );
  }

  // Create the canvas and store it
  getCanvas() {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
      this.template.querySelector('div').appendChild(this._canvas);
    }
    return this._canvas;
  }

  // update chart if chart exist or create a new one
  drawChart() {
    if (!this._isReadyToDraw()) return;
    try {
      this._configService.updateConfig(this._payload, null);
      if (!this._chart || !this._chart.ctx) {
        // eslint-disable-next-line no-undef
        this._chart = new window.Chart(this.getCanvas().getContext('2d'), {
          type: this._type,
          data: this._details,
          options: this._configService.getConfig()
        });
      } else {
        this._chart.data = this._details;
        this._chart.options = this._configService.getConfig();
        this._chart.update();
      }
    } catch (error) {
      this.errorCallback(error, error.stack);
    }
  }

  // check if we have enough to draw a chart
  _isReadyToDraw() {
    return (
      this._chartjsLoaded &&
      this._details &&
      this._type /* && this.isConnected*/
    );
  }

  _callChartjsloadedCallback() {
    if (
      this._chartjsLoaded === true &&
      typeof this._chartjsLoadedCallback === 'function'
    ) {
      this._chartjsLoadedCallback();
    }
  }

  _listenerHandlers = {
    // store option and throttle a drawChart
    handleOption: (evt) => {
      evt.stopPropagation();
      const { payload, option } = evt.detail;
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
    },
    // remove option and throttle a drawChart
    handleDisconnect: (evt) => {
      evt.stopPropagation();
      const { payload, option } = evt.detail;
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
  };
}
