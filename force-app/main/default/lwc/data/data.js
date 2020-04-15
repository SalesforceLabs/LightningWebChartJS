import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_DATA, DATA_EVENT_NAME } from 'c/constants';
import { nanoid } from 'c/nanoid';

import { sanitize } from 'c/utils';

export default class Data extends BaseAttribute {
  @api
  get label() {
    return this._payload.label;
  }
  set label(v) {
    this._payload.label = v;
  }

  @api
  get yaxisid() {
    return this._payload.yAxisID;
  }
  set yaxisid(v) {
    this._payload.yAxisID = v;
  }

  @api
  get xaxisid() {
    return this._payload.xAxisID;
  }
  set xaxisid(v) {
    this._payload.xAxisID = v;
  }

  @api
  get detail() {
    return this._payload.data;
  }
  set detail(v) {
    this._payload.data = sanitize(v);
  }

  @api
  get backgroundcolor() {
    return this._payload.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.backgroundColor = sanitize(v);
  }

  @api
  get bordercolor() {
    return this._payload.borderColor;
  }
  set bordercolor(v) {
    this._payload.borderColor = sanitize(v);
  }

  @api
  get borderwidth() {
    return this._payload.borderWidth;
  }
  set borderwidth(v) {
    this._payload.borderWidth = v;
  }

  @api
  get fill() {
    return this._payload.fill;
  }
  set fill(v) {
    this._payload.fill = v;
  }

  @api
  get order() {
    return this._payload.order;
  }
  set order(v) {
    this._payload.order = Number.parseInt(v, 10);
  }

  @api
  get type() {
    return this._payload.type;
  }
  set type(v) {
    this._payload.type = v;
  }

  // Radar chart specific
  @api
  get pointhoverbackgroundcolor() {
    return this._payload.pointHoverBackgroundColor;
  }
  set pointhoverbackgroundcolor(v) {
    this._payload.pointHoverBackgroundColor = v;
  }

  @api
  get pointhoverbordercolor() {
    return this._payload.pointHoverBorderColor;
  }
  set pointhoverbordercolor(v) {
    this._payload.pointHoverBorderColor = v;
  }

  @api
  get pointhoverborderwidth() {
    return this._payload.pointHoverBorderWidth;
  }
  set pointhoverborderwidth(v) {
    this._payload.pointHoverBorderWidth = v;
  }

  @api
  get pointhoverradius() {
    return this._payload.pointHoverRadius;
  }
  set pointhoverradius(v) {
    this._payload.pointHoverRadius = v;
  }

  constructor() {
    super();
    this._eventName = DATA_EVENT_NAME;
    this._payload.uuid = nanoid(10);
    this._option = ATTRIBUTE_DATA;
  }
}
