import { LightningElement, api /*getComponentDef*/ } from 'lwc';
import Chart from '@salesforce/resourceUrl/chartjs_v293';
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
    //this._mt.registerCallback(()=>this.renderedCallback());
  }

  connectedCallback() {
    this.addEventListener(OPTION_EVENT_NAME, evt => {
      const { payload, option } = evt.detail;
      if (option === ATTRIBUTE_DATA) {
        this._details = payload;
      } else {
        this._configService.updateConfig(payload, option);
      }
      this._mt.waitNextTask();
      //this._mt.waitNextTask(()=>this.renderedCallback());
    });

    this.addEventListener(DISCONNECT_EVENT_NAME, evt => {
      this.handleChildDisconnect(evt);
    });
  }

  //renderedCallback() {
  //this.renderChart();
  //}

  getCanvas() {
    return this.template.querySelector('canvas').getContext('2d');
  }

  renderChart() {
    if (!this._chart) {
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

  handleChildDisconnect(evt) {
    this._configService.removeConfig(evt.detail.payload, evt.detail.option);
    this._mt.waitNextTask();
    //this.renderChart();
  }

  /*render() {
        return this.template;
        //return getComponentDef(BaseChart).template;
    }*/
}
