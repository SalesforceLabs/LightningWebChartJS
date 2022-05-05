import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ELEMENTS } from 'c/constants';

export default class ArcConfiguration extends BaseAttribute {
  @api
  get angle() {
    return this._payload.arc.angle;
  }
  set angle(v) {
    this._payload.arc.angle = v;
  }

  @api
  get backgroundcolor() {
    return this._payload.arc.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.arc.backgroundColor = v;
  }

  @api
  get borderalign() {
    return this._payload.arc.borderAlign;
  }
  set borderalign(v) {
    this._payload.arc.borderAlign = v;
  }

  @api
  get bordercolor() {
    return this._payload.arc.borderColor;
  }
  set bordercolor(v) {
    this._payload.arc.borderColor = v;
  }

  @api
  get borderwidth() {
    return this._payload.arc.borderWidth;
  }
  set borderwidth(v) {
    this._payload.arc.borderWidth = v;
  }

  constructor() {
    super();
    this._payload.arc = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_ELEMENTS;
  }
}
