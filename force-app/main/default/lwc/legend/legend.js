import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_LEGEND } from 'c/constants';
import { parseBoolean } from 'c/utils';

/**
 * https://www.chartjs.org/docs/latest/configuration/legend.html
 */
export default class Legend extends BaseAttribute {
  @api
  get display() {
    return this._payload.display;
  }
  set display(v) {
    this._payload.display = parseBoolean(v);
  }

  @api
  get position() {
    return this._payload.position;
  }
  set position(v) {
    this._payload.position = v;
  }

  @api
  get align() {
    return this._payload.align;
  }
  set align(v) {
    this._payload.align = v;
  }

  @api
  get fullwidth() {
    return this._payload.fullWidth;
  }
  set fullwidth(v) {
    this._payload.fullWidth = parseBoolean(v);
  }

  @api
  get reverse() {
    return this._payload.reverse;
  }
  set reverse(v) {
    this._payload.reverse = parseBoolean(v);
  }

  @api
  get rtl() {
    return this._payload.rtl;
  }
  set rtl(v) {
    this._payload.rtl = parseBoolean(v);
  }

  @api
  get textdirection() {
    return this._payload.textDirection;
  }
  set textdirection(v) {
    this._payload.textDirection = v;
  }

  @api
  get labelBoxwidth() {
    return this._payload.labels.boxWidth;
  }
  set labelBoxwidth(v) {
    this._payload.labels.boxWidth = v;
  }

  @api
  get labelFontsize() {
    return this._payload.labels.fontSize;
  }
  set labelFontsize(v) {
    this._payload.labels.fontSize = v;
  }

  @api
  get labelFontstyle() {
    return this._payload.labels.fontStyle;
  }
  set labelFontstyle(v) {
    this._payload.labels.fontStyle = v;
  }

  @api
  get labelFontcolor() {
    return this._payload.labels.fontColor;
  }
  set labelFontcolor(v) {
    this._payload.labels.fontColor = v;
  }
  @api
  get labelFontfamily() {
    return this._payload.labels.fontFamily;
  }
  set labelFontfamily(v) {
    this._payload.labels.fontFamily = v;
  }

  @api
  get labelPadding() {
    return this._payload.labels.padding;
  }
  set labelPadding(v) {
    this._payload.labels.padding = v;
  }

  @api
  get labelUsepointstyle() {
    return this._payload.labels.usePointStyle;
  }
  set labelUsepointstyle(v) {
    this._payload.labels.usePointStyle = parseBoolean(v);
  }

  @api
  get labelCallbackOnclick() {
    return this._payload.labels.onClick;
  }
  set labelCallbackOnclick(v) {
    this._payload.labels.onClick = v;
  }
  @api
  get labelCallbackOnhover() {
    return this._payload.labels.onHover;
  }
  set labelCallbackOnhover(v) {
    this._payload.labels.onHover = v;
  }
  @api
  get labelCallbackOnleave() {
    return this._payload.labels.onLeave;
  }
  set labelCallbackOnleave(v) {
    this._payload.labels.onLeave = v;
    this._callbackOnleave = v;
  }

  @api
  get labelCallbackGeneratelabels() {
    return this._payload.labels.generateLabels;
  }
  set labelCallbackGeneratelabels(v) {
    this._payload.labels.generateLabels = v;
  }

  @api
  get labelCallbackFilter() {
    return this._payload.labels.filter;
  }
  set labelCallbackFilter(v) {
    this._payload.labels.filter = v;
  }

  constructor() {
    super();
    this._payload.display = true;
    this._payload.labels = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_LEGEND;
  }
}
