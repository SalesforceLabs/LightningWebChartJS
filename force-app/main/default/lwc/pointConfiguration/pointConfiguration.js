import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ELEMENTS } from 'c/constants';

export default class PointConfiguration extends BaseAttribute {
  @api
  get radius() {
    return this._payload.point.radius;
  }
  set radius(v) {
    this._payload.point.radius = v;
  }
  @api
  get pointstyle() {
    return this._payload.point.pointStyle;
  }
  set pointstyle(v) {
    this._payload.point.pointStyle = v;
  }
  @api
  get rotation() {
    return this._payload.point.rotation;
  }
  set rotation(v) {
    this._payload.point.rotation = v;
  }
  @api
  get backgroundcolor() {
    return this._payload.point.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.point.backgroundColor = v;
  }
  @api
  get borderwidth() {
    return this._payload.point.borderWidth;
  }
  set borderwidth(v) {
    this._payload.point.borderWidth = v;
  }
  @api
  get bordercolor() {
    return this._payload.point.borderColor;
  }
  set bordercolor(v) {
    this._payload.point.borderColor = v;
  }
  @api
  get hitradius() {
    return this._payload.point.hitRadius;
  }
  set hitradius(v) {
    this._payload.point.hitRadius = v;
  }
  @api
  get hoverradius() {
    return this._payload.point.hoverRadius;
  }
  set hoverradius(v) {
    this._payload.point.hoverRadius = v;
  }
  @api
  get hoverborderwidth() {
    return this._payload.point.hoverBorderWidth;
  }
  set hoverborderwidth(v) {
    this._payload.point.hoverBorderWidth = v;
  }

  constructor() {
    super();
    this._payload.point = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_ELEMENTS;
  }
}
