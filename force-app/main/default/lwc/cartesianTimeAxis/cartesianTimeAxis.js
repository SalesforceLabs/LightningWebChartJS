import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_TIME } from 'c/constants';
import { parseBoolean } from 'c/utils';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/time.html
 */
export default class CartesianTimeAxis extends CartesianAxis {
  @api
  get adapterDate() {
    return this._content.adapters.date;
  }
  set adapterDate(v) {
    this._content.adapters.date = v;
  }

  @api
  get distribution() {
    return this._content.distribution;
  }
  set distribution(v) {
    this._content.distribution = v;
  }

  @api
  get bounds() {
    return this._content.bounds;
  }
  set bounds(v) {
    this._content.bounds = v;
  }

  @api
  get tickSource() {
    return this._content.ticks.source;
  }
  set tickSource(v) {
    this._content.ticks.source = v;
  }

  @api
  get timeDisplayformats() {
    return this._content.time.displayFormats;
  }
  set timeDisplayformats(v) {
    this._content.time.displayFormats = v;
  }

  @api
  get timeIsoweekday() {
    return this._content.time.isoWeekday;
  }
  set timeIsoweekday(v) {
    this._content.time.isoWeekday = parseBoolean(v);
  }

  @api
  get timeParser() {
    return this._content.time.parser;
  }
  set timeParser(v) {
    this._content.time.parser = v;
  }

  @api
  get timeRound() {
    return this._content.time.round;
  }
  set timeRound(v) {
    this._content.time.round = v;
  }

  @api
  get timeTooltipformat() {
    return this._content.time.tooltipFormat;
  }
  set timeTooltipformat(v) {
    this._content.time.tooltipFormat = v;
  }

  @api
  get timeUnit() {
    return this._content.time.unit;
  }
  set timeUnit(v) {
    this._content.time.unit = v;
  }

  @api
  get timeStepsize() {
    return this._content.time.stepSize;
  }
  set timeStepsize(v) {
    this._content.time.stepSize = Number(v);
  }
  _timeMinunit;
  @api
  get timeMinunit() {
    return this._content.time.minUnit;
  }
  set timeMinunit(v) {
    this._content.time.minUnit = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_TIME;
    this._content.adapters = this._reactivityManager.getReactivityProxy();
    this._content.time = this._reactivityManager.getReactivityProxy();
  }
}
