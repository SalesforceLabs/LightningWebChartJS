import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_DATA, DATA_EVENT_NAME } from 'c/constants';
import { nanoid } from 'c/nanoid';

import { parseBoolean, sanitize } from 'c/utils';

export default class Data extends BaseAttribute {
  @api
  get backgroundcolor() {
    return this._payload.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.backgroundColor = sanitize(v);
  }
  @api
  get bordercapstyle() {
    return this._payload.borderCapStyle;
  }
  set bordercapstyle(v) {
    this._payload.borderCapStyle = v;
  }
  @api
  get bordercolor() {
    return this._payload.borderColor;
  }
  set bordercolor(v) {
    this._payload.borderColor = sanitize(v);
  }
  @api
  get borderdash() {
    return this._payload.borderDash;
  }
  set borderdash(v) {
    this._payload.borderDash = v;
  }
  @api
  get borderdashoffset() {
    return this._payload.borderDashOffset;
  }
  set borderdashoffset(v) {
    this._payload.borderDashOffset = v;
  }
  @api
  get borderjoinstyle() {
    return this._payload.borderJoinStyle;
  }
  set borderjoinstyle(v) {
    this._payload.borderJoinStyle = v;
  }
  @api
  get borderwidth() {
    return this._payload.borderWidth;
  }
  set borderwidth(v) {
    this._payload.borderWidth = v;
  }
  @api
  get hoverbackgroundcolor() {
    return this._payload.hoverBackgroundColor;
  }
  set hoverbackgroundcolor(v) {
    this._payload.hoverBackgroundColor = sanitize(v);
  }
  @api
  get hoverbordercapstyle() {
    return this._payload.hoverBorderCapStyle;
  }
  set hoverbordercapstyle(v) {
    this._payload.hoverBorderCapStyle = v;
  }
  @api
  get hoverbordercolor() {
    return this._payload.hoverBorderColor;
  }
  set hoverbordercolor(v) {
    this._payload.hoverBorderColor = sanitize(v);
  }
  @api
  get hoverborderdash() {
    return this._payload.hoverBorderDash;
  }
  set hoverborderdash(v) {
    this._payload.hoverBorderDash = v;
  }
  @api
  get hoverborderdashoffset() {
    return this._payload.hoverBorderDashOffset;
  }
  set hoverborderdashoffset(v) {
    this._payload.hoverBorderDashOffset = v;
  }
  @api
  get hoverborderjoinstyle() {
    return this._payload.hoverBorderJoinStyle;
  }
  set hoverborderjoinstyle(v) {
    this._payload.hoverBorderJoinStyle = v;
  }
  @api
  get hoverborderwidth() {
    return this._payload.hoverBorderWidth;
  }
  set hoverborderwidth(v) {
    this._payload.hoverBorderWidth = v;
  }
  @api
  get fill() {
    return this._payload.fill;
  }
  set fill(v) {
    this._payload.fill = parseBoolean(v);
  }
  @api
  get label() {
    return this._payload.label;
  }
  set label(v) {
    this._payload.label = v;
  }
  @api
  get linetension() {
    return this._payload.lineTension;
  }
  set linetension(v) {
    this._payload.lineTension = v;
  }
  @api
  get pointbackgroundcolor() {
    return this._payload.pointBackgroundColor;
  }
  set pointbackgroundcolor(v) {
    this._payload.pointBackgroundColor = sanitize(v);
  }
  @api
  get pointbordercolor() {
    return this._payload.pointBorderColor;
  }
  set pointbordercolor(v) {
    this._payload.pointBorderColor = sanitize(v);
  }
  @api
  get pointborderwidth() {
    return this._payload.pointBorderWidth;
  }
  set pointborderwidth(v) {
    this._payload.pointBorderWidth = v;
  }
  @api
  get pointhitradius() {
    return this._payload.pointHitRadius;
  }
  set pointhitradius(v) {
    this._payload.pointHitRadius = v;
  }
  @api
  get pointhoverbackgroundcolor() {
    return this._payload.pointHoverBackgroundColor;
  }
  set pointhoverbackgroundcolor(v) {
    this._payload.pointHoverBackgroundColor = sanitize(v);
  }
  @api
  get pointhoverbordercolor() {
    return this._payload.pointHoverBorderColor;
  }
  set pointhoverbordercolor(v) {
    this._payload.pointHoverBorderColor = sanitize(v);
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
  @api
  get pointradius() {
    return this._payload.pointRadius;
  }
  set pointradius(v) {
    this._payload.pointRadius = v;
  }
  @api
  get pointrotation() {
    return this._payload.pointRotation;
  }
  set pointrotation(v) {
    this._payload.pointRotation = v;
  }
  @api
  get pointstyle() {
    return this._payload.pointStyle;
  }
  set pointstyle(v) {
    this._payload.pointStyle = v;
  }
  @api
  get spangaps() {
    return this._payload.spanGaps;
  }
  set spangaps(v) {
    this._payload.spanGaps = parseBoolean(v);
  }
  @api
  get stack() {
    return this._payload.stack;
  }
  set stack(v) {
    this._payload.stack = v;
  }
  @api
  get cubicinterpolationmode() {
    return this._payload.cubicInterpolationMode;
  }
  set cubicinterpolationmode(v) {
    this._payload.cubicInterpolationMode = v;
  }
  @api
  get clip() {
    return this._payload.clip;
  }
  set clip(v) {
    this._payload.clip = sanitize(v);
  }
  @api
  get showline() {
    return this._payload.showLine;
  }
  set showline(v) {
    this._payload.showLine = parseBoolean(v);
  }
  @api
  get steppedline() {
    return this._payload.steppedLine;
  }
  set steppedline(v) {
    this._payload.steppedLine = parseBoolean(v);
  }
  @api
  get xaxisid() {
    return this._payload.xAxisID;
  }
  set xaxisid(v) {
    this._payload.xAxisID = v;
  }
  @api
  get yaxisid() {
    return this._payload.yAxisID;
  }
  set yaxisid(v) {
    this._payload.yAxisID = v;
  }
  @api
  get borderskipped() {
    return this._payload.borderSkipped;
  }
  set borderskipped(v) {
    this._payload.borderSkipped = v;
  }
  @api
  get borderalign() {
    return this._payload.borderAlign;
  }
  set borderalign(v) {
    this._payload.borderAlign = v;
  }
  @api
  get weight() {
    return this._payload.weight;
  }
  set weight(v) {
    this._payload.weight = v;
  }
  @api
  get hoverradius() {
    return this._payload.hoverRadius;
  }
  set hoverradius(v) {
    this._payload.hoverRadius = v;
  }
  @api
  get hitradius() {
    return this._payload.hitRadius;
  }
  set hitradius(v) {
    this._payload.hitRadius = v;
  }
  @api
  get rotation() {
    return this._payload.rotation;
  }
  set rotation(v) {
    this._payload.rotation = v;
  }
  @api
  get radius() {
    return this._payload.radius;
  }
  set radius(v) {
    this._payload.radius = v;
  }
  @api
  get type() {
    return this._payload.type;
  }
  set type(v) {
    this._payload.type = v;
  }

  @api
  get detail() {
    return this._payload.data;
  }
  set detail(v) {
    this._payload.data = sanitize(v);
  }

  @api
  get order() {
    return this._payload.order;
  }
  set order(v) {
    this._payload.order = Number.parseInt(v, 10);
  }

  constructor() {
    super();
    this._eventName = DATA_EVENT_NAME;
    this._payload.uuid = nanoid(10);
    this._option = ATTRIBUTE_DATA;
  }
}
