import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { parseBoolean } from 'c/utils';
/**
 * https://www.chartjs.org/docs/latest/axes/
 */
export default class BaseAxis extends BaseAttribute {
  @api
  get display() {
    return this._content.display;
  }
  set display(v) {
    this._content.display = parseBoolean(v);
  }

  @api
  get weight() {
    return this._content.weight;
  }
  set weight(v) {
    this._content.weight = v;
  }

  @api
  get ticksCallback() {
    this._content.ticks = this._content.ticks || {};
    return this._content.ticks.callback;
  }
  set ticksCallback(v) {
    this._content.ticks = this._content.ticks || {};
    this._content.ticks.callback = v;
  }

  @api
  get callbackBeforeupdate() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeUpdate;
  }
  set callbackBeforeupdate(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeUpdate = v;
  }

  @api
  get callbackBeforesetdimensions() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeSetDimensions;
  }
  set callbackBeforesetdimensions(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeSetDimensions = v;
  }

  @api
  get callbackAftersetdimensions() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterSetDimensions;
  }
  set callbackAftersetdimensions(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterSetDimensions = v;
  }

  @api
  get callbackBeforedatalimits() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeDataLimits;
  }
  set callbackBeforedatalimits(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeDataLimits = v;
  }

  @api
  get callbackAfterdatalimits() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterDataLimits;
  }
  set callbackAfterdatalimits(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterDataLimits = v;
  }

  @api
  get callbackBeforebuildticks() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeBuildTicks;
  }
  set callbackBeforebuildticks(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeBuildTicks = v;
  }

  @api
  get callbackAfterbuildticks() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterBuildTicks;
  }
  set callbackAfterbuildticks(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterBuildTicks = v;
  }

  @api
  get callbackBeforeticktolabelconversion() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeTickToLabelConversion;
  }
  set callbackBeforeticktolabelconversion(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeTickToLabelConversion = v;
  }

  @api
  get callbackAfterticktolabelconversion() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterTickToLabelConversion;
  }
  set callbackAfterticktolabelconversion(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterTickToLabelConversion = v;
  }

  @api
  get callbackBeforecalculatetickrotation() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeCalculateTickRotation;
  }
  set callbackBeforecalculatetickrotation(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeCalculateTickRotation = v;
  }

  @api
  get callbackAftercalculatetickrotation() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterCalculateTickRotation;
  }
  set callbackAftercalculatetickrotation(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterCalculateTickRotation = v;
  }

  @api
  get callbackBeforefit() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.beforeFit;
  }
  set callbackBeforefit(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.beforeFit = v;
  }

  @api
  get callbackAfterfit() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterFit;
  }
  set callbackAfterfit(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterFit = v;
  }

  @api
  get callbackAfterupdate() {
    this._content.callbacks = this._content.callbacks || {};
    return this._content.callbacks.afterUpdate;
  }
  set callbackAfterupdate(v) {
    this._content.callbacks = this._content.callbacks || {};
    this._content.callbacks.afterUpdate = v;
  }

  constructor() {
    super();
    this._content = this._payload;
  }
}
