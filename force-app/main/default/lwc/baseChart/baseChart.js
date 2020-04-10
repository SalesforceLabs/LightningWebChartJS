import { LightningElement, api } from 'lwc';
import ChartJS from '@salesforce/resourceUrl/chartjs_v280';
import { loadScript } from 'lightning/platformResourceLoader';

import {
  ATTRIBUTE_DATA,
  OPTION_EVENT_NAME,
  DISCONNECT_EVENT_NAME
} from 'c/constants';
import ChartConfigService from 'c/chartConfigService';
import MicroTaskHandler from 'c/microTaskHandler';
export default class BaseChart extends LightningElement {
  @api width = 400;
  @api height = 400;
  @api stylecss;

  _baseChartInitialized = false;
  _chartjsLoaded = false;

  get chartStyle() {
    return `width: ${this.width}; height: ${this.height}; ${this.stylecss ||
      ''}`;
  }

  constructor() {
    super();
    this._configService = new ChartConfigService();
    this._details = null;
    this._chart = null;
    this._mt = new MicroTaskHandler();
    this._mt.registerCallback(() => this.renderChart());
  }

  connectedCallback() {
    this.addEventListener(OPTION_EVENT_NAME, evt => {
      evt.stopPropagation();
      const { payload, option } = evt.detail;
      if (option === ATTRIBUTE_DATA) {
        this._details = payload;
      } else {
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
