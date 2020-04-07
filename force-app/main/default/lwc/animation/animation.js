import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ANIMATION } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/configuration/animations.html
 */

export default class Animation extends BaseAttribute {
  @api
  get duration() {
    return this._payload.duration;
  }
  set duration(v) {
    this._payload.duration = v;
    this._mt.waitNextTask();
  }

  @api
  get easing() {
    return this._payload.easing;
  }
  set easing(v) {
    this._payload.easing = v;
    this._mt.waitNextTask();
  }

  @api
  get callbackOncomplete() {
    return this._payload.onComplete;
  }
  set callbackOncomplete(v) {
    this._payload.onComplete = v;
    this._mt.waitNextTask();
  }

  @api
  get callbackOnprogress() {
    return this._payload.onProgress;
  }
  set callbackOnprogress(v) {
    this._payload.onProgress = v;
    this._mt.waitNextTask();
  }

  constructor() {
    super();
    this._option = ATTRIBUTE_ANIMATION;
  }
}
