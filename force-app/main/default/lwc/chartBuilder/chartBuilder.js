import { LightningElement, api } from 'lwc';
import { nanoid } from 'c/nanoid';
import {
  POLARAREA_CHART_TYPE,
  RADAR_CHART_TYPE,
  PIE_CHART_TYPE,
  DOUGHNUT_CHART_TYPE
} from 'c/constants';
import getChartData from '@salesforce/apex/ChartBuilderController.getChartData';

const RADIAL_TYPE = [POLARAREA_CHART_TYPE, RADAR_CHART_TYPE];
const CIRCULAR_TYPE = [DOUGHNUT_CHART_TYPE, PIE_CHART_TYPE];

const DIMENSIONABLE_TYPES = [...CIRCULAR_TYPE, ...RADIAL_TYPE];

export default class ChartBuilder extends LightningElement {
  containerClass = ChartBuilder.DEFAULT_CSS_CLASS;

  _flexipageRegionWidth;
  @api
  get flexipageRegionWidth() {
    return this._flexipageRegionWidth;
  }
  set flexipageRegionWidth(v) {
    this._flexipageRegionWidth = v;
    this.containerClass = `${ChartBuilder.DEFAULT_CSS_CLASS} ${this._flexipageRegionWidth}`;
  }

  @api
  recordId;

  @api
  title;

  @api
  type;

  @api
  styleCss;

  @api
  legendPosition;

  @api
  colorPalette = 'default';

  @api
  fill = false;

  dimensionsLabels;
  _detailsLabels = [];
  @api
  get detailsLabels() {
    return this._detailsLabels;
  }
  set detailsLabels(v) {
    try {
      this._detailsLabels = Array.isArray(v) ? v : JSON.parse(v);
    } catch (e) {
      this._detailsLabels = [];
    }
  }

  // This is where the data are build and given to the chart.
  // It is set either directly via the app builder
  // or by the soql setter which call the imperative apex method
  // or by the handler setter which call the imperative apex method
  _throttlingDetails = false;
  _details = [];
  @api
  get details() {
    return this._details;
  }
  set details(v) {
    try {
      const data = v ? (Array.isArray(v) ? v : JSON.parse(v)) : null;
      if (!data || this._throttlingDetails) return;

      this._throttlingDetails = true;
      Promise.resolve()
        .then(() => {
          this._throttlingDetails = false;

          // Build the data structure to use to iterate
          // and create data component in the template
          const palette = ChartBuilder.DEFAULT_PALETTE[this.colorPalette];
          this.dimensionsLabels = this.dimensionsLabels || [
            ...new Set(data.map((x) => x.labels).flat())
          ];
          this._details = data
            .filter((x) => !!x.detail)
            .map((x, i) => ({
              detail: x.detail,
              labels: this._detailsLabels[i],
              uuid: x.uuid || nanoid(4),
              bgColor:
                x.bgColor || this.isDimensionable
                  ? x.detail.map((_, j) => palette[j % palette.length])
                  : palette[i % palette.length],
              fill: this.fill
            }));
          this.error = false;
        })
        .catch((error) => this.errorCallback(error));
    } catch (error) {
      this.errorCallback(error);
    }
    this.isLoaded = true;
  }

  _soql;
  @api
  get soql() {
    return this._soql;
  }
  set soql(v) {
    this._soql = v;
    if (this._soql) {
      // sanitize query
      // replace recordId with the sanitize recordId
      this._soql = this._soql.replace(
        /:recordId/g,
        `'${
          this.recordId
            ? this.recordId.replace("'", "\\'")
            : ChartBuilder.FAKE_ID
        }'`
      );
      // pass the SOQL to the getData service from the server
      this._getChartDataHandler(
        ChartBuilder.SOQL_DATA_PROVIDER_APEX_TYPE,
        this._soql
      );
    }
  }

  _handler;
  @api
  get handler() {
    return this._handler;
  }
  set handler(v) {
    this._handler = v;
    if (this._handler) {
      // pass the custom handler to the getData service from the server
      this._getChartDataHandler(this._handler, this.recordId);
    }
  }

  get isCircular() {
    return CIRCULAR_TYPE.includes(this.type);
  }

  get isRadial() {
    return RADIAL_TYPE.includes(this.type);
  }

  get isDimensionable() {
    return DIMENSIONABLE_TYPES.includes(this.type);
  }

  isLoaded = false;
  error = false;
  stack;

  errorCallback(error, stack) {
    this.error = error;
    this.stack = stack;
    this._details = null;
    this._detailsLabels = null;
    this.dimensionsLabels = null;
  }

  handleError(evt) {
    this.errorCallback(evt.detail.error, evt.detail.stack);
  }

  // call the apex method to get data from the server
  _getChartDataHandler(handlerName, input) {
    this.isLoaded = false;
    getChartData({ chartDataProviderType: handlerName, ctx: input })
      .then((result) => {
        // eslint-disable-next-line @lwc/lwc/no-api-reassignments
        this.details = result;
      })
      .catch((error) => {
        this.errorCallback(error.body.message);
      });
  }

  // https://www.lightningdesignsystem.com/guidelines/charts/#Chart-Color
  /* 
  iterate over data and map a palette color modulo DEFAULT_PALETTE size with opacity and then decrement opacity
  */
  static DEFAULT_PALETTE = {
    //Default Palette: #52B7D8, #E16032, #FFB03B, #54A77B, #4FD2D2, #E287B2
    default: [
      'rgba(82,183,216,1)',
      'rgba(225,96,50,1)',
      'rgba(255,176,59,1)',
      'rgba(84,167,123,1)',
      'rgba(79,210,210,1)',
      'rgba(226,135,178,1)'
    ],
    //Color Safe: #529EE0, #D9A6C2, #08916D, #F59B00, #006699, #F0E442
    colorsafe: [
      'rgba(82,158,224,1)',
      'rgba(217,166,194,1)',
      'rgba(8,145,109,1)',
      'rgba(245,155,0,1)',
      'rgba(0,102,153,1)',
      'rgba(240,228,66,1)'
    ],
    //Light: #3296ED, #77B9F2, #9D53F2, #C398F5, #26ABA4, #4ED4CD
    light: [
      'rgba(50,150,237,1)',
      'rgba(119,185,242,1)',
      'rgba(157,83,242,1)',
      'rgba(195,152,245,1)',
      'rgba(38,171,164,1)',
      'rgba(78,212,205,1)'
    ],
    //Bluegrass: #C7F296, #94E7A8, #51D2BB, #27AAB0, #116985, #053661
    bluegrass: [
      'rgba(199,242,150,1)',
      'rgba(148,231,168,1)',
      'rgba(81,210,187,1)',
      'rgba(39,170,176,1)',
      'rgba(17,105,133,1)',
      'rgba(5,54,97,1)'
    ],
    //Sunrise: #F5DE98, #F5C062, #F59623, #CE6716, #762F3D, #300561
    sunrise: [
      'rgba(245,222,152,1)',
      'rgba(245,192,98,1)',
      'rgba(245,150,35,1)',
      'rgba(206,103,22,1)',
      'rgba(118,47,61,1',
      'rgba(48,5,97,1)'
    ],
    //Water: #96F2EE, #68CEEE, #2D9CED, #0E6ECE, #073E92, #051C61
    water: [
      'rgba(150,242,238,1)',
      'rgba(104,206,238,1)',
      'rgba(45,156,237,1)',
      'rgba(14,110,206,1)',
      'rgba(7,62,146,1)',
      'rgba(5,28,97,1)'
    ],
    //Watermelon: #F598A7, #F56580, #F4284E, #C11C2F, #5C3F22, #0A611B
    watermelon: [
      'rgba(245,152,167,1)',
      'rgba(245,101,128,1)',
      'rgba(244,40,78,1)',
      'rgba(193,28,47,1)',
      'rgba(92,63,34,1)',
      'rgba(10,97,27,1)'
    ]
  };

  static FAKE_ID = 'xxxxxxxxxxxxxxx';
  static SOQL_DATA_PROVIDER_APEX_TYPE = 'SOQLDataProvider';
  static DEFAULT_CSS_CLASS = 'slds-card slds-p-around_small';
}
