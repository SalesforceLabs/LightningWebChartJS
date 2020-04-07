import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_LAYOUT } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/configuration/layout.html
 */
export default class Layout extends BaseAttribute {
  @api
  get paddingBottom() {
    return this._payload.padding.bottom;
  }
  set paddingBottom(v) {
    this._payload.padding.bottom = v;
    this._mt.waitNextTask();
  }

  @api
  get paddingLeft() {
    return this._payload.padding.left;
  }
  set paddingLeft(v) {
    this._payload.padding.left = v;
    this._mt.waitNextTask();
  }

  @api
  get paddingRight() {
    return this._payload.padding.right;
  }
  set paddingRight(v) {
    this._payload.padding.right = v;
    this._mt.waitNextTask();
  }

  @api
  get paddingTop() {
    return this._payload.padding.top;
  }
  set paddingTop(v) {
    this._payload.padding.top = v;
    this._mt.waitNextTask();
  }

  constructor() {
    super();
    this._payload.padding = {};
    this._option = ATTRIBUTE_LAYOUT;
  }
}
