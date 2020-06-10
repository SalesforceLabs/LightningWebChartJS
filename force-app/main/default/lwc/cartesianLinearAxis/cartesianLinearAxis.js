import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_LINEAR } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
 */
export default class CartesianLinearAxis extends CartesianAxis {
  @api
  get tickBeginatzero() {
    return this._content.ticks.beginAtZero;
  }
  set tickBeginatzero(v) {
    this._content.ticks.beginAtZero = Boolean(v);
  }

  @api
  get tickMaxtickslimit() {
    return this._content.ticks.maxTicksLimit;
  }
  set tickMaxtickslimit(v) {
    this._content.ticks.maxTicksLimit = Number(v);
  }

  @api
  get tickPrecision() {
    return this._content.ticks.precision;
  }
  set tickPrecision(v) {
    this._content.ticks.precision = v;
  }

  @api
  get tickStepsize() {
    return this._content.ticks.stepSize;
  }
  set tickStepsize(v) {
    this._content.ticks.stepSize = Number(v);
  }

  @api
  get tickSuggestedmax() {
    return this._content.ticks.suggestedMax;
  }
  set tickSuggestedmax(v) {
    this._content.ticks.suggestedMax = v;
  }

  @api
  get tickSuggestedmin() {
    return this._content.ticks.suggestedMin;
  }
  set tickSuggestedmin(v) {
    this._content.ticks.suggestedMin = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_LINEAR;
  }
}
