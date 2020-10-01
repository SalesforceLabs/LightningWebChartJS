import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_LINEAR } from 'c/constants';
import { parseBoolean } from 'c/utils';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
 */
export default class CartesianLinearAxis extends CartesianAxis {
  @api
  get ticksBeginatzero() {
    return this._content.ticks.beginAtZero;
  }
  set ticksBeginatzero(v) {
    this._content.ticks.beginAtZero = parseBoolean(v);
  }

  @api
  get ticksMaxtickslimit() {
    return this._content.ticks.maxTicksLimit;
  }
  set ticksMaxtickslimit(v) {
    this._content.ticks.maxTicksLimit = Number(v);
  }

  @api
  get ticksPrecision() {
    return this._content.ticks.precision;
  }
  set ticksPrecision(v) {
    this._content.ticks.precision = v;
  }

  @api
  get ticksStepsize() {
    return this._content.ticks.stepSize;
  }
  set ticksStepsize(v) {
    this._content.ticks.stepSize = Number(v);
  }

  @api
  get ticksSuggestedmax() {
    return this._content.ticks.suggestedMax;
  }
  set ticksSuggestedmax(v) {
    this._content.ticks.suggestedMax = v;
  }

  @api
  get ticksSuggestedmin() {
    return this._content.ticks.suggestedMin;
  }
  set ticksSuggestedmin(v) {
    this._content.ticks.suggestedMin = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_LINEAR;
  }
}
