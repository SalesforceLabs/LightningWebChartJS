import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ELEMENTS } from 'c/constants';
import { parseBoolean } from 'c/utils';

export default class LineConfiguration extends BaseAttribute {
  @api
  get tension() {
    return this._payload.line.tension;
  }
  set tension(v) {
    this._payload.line.tension = v;
  }

  @api
  get backgroundcolor() {
    return this._payload.line.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.line.backgroundColor = v;
  }

  @api
  get borderwidth() {
    return this._payload.line.borderWidth;
  }
  set borderwidth(v) {
    this._payload.line.borderWidth = v;
  }

  @api
  get bordercolor() {
    return this._payload.line.borderColor;
  }
  set bordercolor(v) {
    this._payload.line.borderColor = v;
  }

  @api
  get bordercapstyle() {
    return this._payload.line.borderCapStyle;
  }
  set bordercapstyle(v) {
    this._payload.line.borderCapStyle = v;
  }

  @api
  get borderdash() {
    return this._payload.line.borderDash;
  }
  set borderdash(v) {
    this._payload.line.borderDash = v;
  }

  @api
  get borderdashoffset() {
    return this._payload.line.borderDashOffset;
  }
  set borderdashoffset(v) {
    this._payload.line.borderDashOffset = v;
  }

  @api
  get borderjoinstyle() {
    return this._payload.line.borderJoinStyle;
  }
  set borderjoinstyle(v) {
    this._payload.line.borderJoinStyle = v;
  }

  @api
  get capbezierpoints() {
    return this._payload.line.capBezierPoints;
  }
  set capbezierpoints(v) {
    this._payload.line.capBezierPoints = parseBoolean(v);
  }

  @api
  get cubicinterpolationmode() {
    return this._payload.line.cubicInterpolationMode;
  }
  set cubicinterpolationmode(v) {
    this._payload.line.cubicInterpolationMode = v;
  }

  @api
  get fill() {
    return this._payload.line.fill;
  }
  set fill(v) {
    this._payload.line.fill = parseBoolean(v);
  }

  @api
  get stepped() {
    return this._payload.line.stepped;
  }
  set stepped(v) {
    this._payload.line.stepped = parseBoolean(v);
  }

  // Radar Chart specific
  @api
  get spangaps() {
    return this._payload.line.spanGaps;
  }
  set spangaps(v) {
    this._payload.line.spanGaps = parseBoolean(v);
  }

  constructor() {
    super();
    this._payload.line = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_ELEMENTS;
  }
}
