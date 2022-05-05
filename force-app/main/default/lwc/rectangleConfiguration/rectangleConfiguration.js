import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ELEMENTS } from 'c/constants';

export default class RectangleConfiguration extends BaseAttribute {
  @api
  get backgroundcolor() {
    return this._payload.rectangle.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.rectangle.backgroundColor = v;
  }

  @api
  get borderwidth() {
    return this._payload.rectangle.borderWidth;
  }
  set borderwidth(v) {
    this._payload.rectangle.borderWidth = v;
  }

  @api
  get bordercolor() {
    return this._payload.rectangle.borderColor;
  }
  set bordercolor(v) {
    this._payload.rectangle.borderColor = v;
  }

  @api
  get borderskipped() {
    return this._payload.rectangle.borderSkipped;
  }
  set borderskipped(v) {
    this._payload.rectangle.borderSkipped = v;
  }

  constructor() {
    super();
    this._payload.rectangle = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_ELEMENTS;
  }
}
