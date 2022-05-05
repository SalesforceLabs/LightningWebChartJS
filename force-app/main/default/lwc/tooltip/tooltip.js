import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_TOOLTIPS } from 'c/constants';
import { parseBoolean } from 'c/utils';

export default class Tooltip extends BaseAttribute {
  @api
  get enabled() {
    return this._payload.enabled;
  }
  set enabled(v) {
    this._payload.enabled = parseBoolean(v);
  }

  @api
  get custom() {
    return this._payload.custom;
  }
  set custom(v) {
    this._payload.custom = v;
  }

  @api
  get mode() {
    return this._payload.mode;
  }
  set mode(v) {
    this._payload.mode = v;
  }

  @api
  get intersect() {
    return this._payload.intersect;
  }
  set intersect(v) {
    this._payload.intersect = parseBoolean(v);
  }

  @api
  get position() {
    return this._payload.position;
  }
  set position(v) {
    this._payload.position = v;
  }

  @api
  get callbackBeforetitle() {
    return this._payload.callbacks.beforeTitle;
  }
  set callbackBeforetitle(v) {
    this._payload.callbacks.beforeTitle = v;
  }

  @api
  get callbackTitle() {
    return this._payload.callbacks.title;
  }
  set callbackTitle(v) {
    this._payload.callbacks.title = v;
  }

  @api
  get callbackAftertitle() {
    return this._payload.callbacks.afterTitle;
  }
  set callbackAftertitle(v) {
    this._payload.callbacks.afterTitle = v;
  }

  @api
  get callbackBeforebody() {
    return this._payload.callbacks.beforeBody;
  }
  set callbackBeforebody(v) {
    this._payload.callbacks.beforeBody = v;
  }

  @api
  get callbackBeforelabel() {
    return this._payload.callbacks.beforeLabel;
  }
  set callbackBeforelabel(v) {
    this._payload.callbacks.beforeLabel = v;
  }

  @api
  get callbackLabel() {
    return this._payload.callbacks.label;
  }
  set callbackLabel(v) {
    this._payload.callbacks.label = v;
  }

  @api
  get callbackLabelcolor() {
    return this._payload.callbacks.labelColor;
  }
  set callbackLabelcolor(v) {
    this._payload.callbacks.labelColor = v;
  }

  @api
  get callbackLabeltextcolor() {
    return this._payload.callbacks.labelTextColor;
  }
  set callbackLabeltextcolor(v) {
    this._payload.callbacks.labelTextColor = v;
  }

  @api
  get callbackAfterlabel() {
    return this._payload.callbacks.afterLabel;
  }
  set callbackAfterlabel(v) {
    this._payload.callbacks.afterLabel = v;
  }

  @api
  get callbackAfterbody() {
    return this._payload.callbacks.afterBody;
  }
  set callbackAfterbody(v) {
    this._payload.callbacks.afterBody = v;
  }

  @api
  get callbackBeforefooter() {
    return this._payload.callbacks.beforeFooter;
  }
  set callbackBeforefooter(v) {
    this._payload.callbacks.beforeFooter = v;
  }

  @api
  get callbackFooter() {
    return this._payload.callbacks.footer;
  }
  set callbackFooter(v) {
    this._payload.callbacks.footer = v;
  }

  @api
  get callbackAfterfooter() {
    return this._payload.callbacks.afterFooter;
  }
  set callbackAfterfooter(v) {
    this._payload.callbacks.afterFooter = v;
  }

  @api
  get itemsort() {
    return this._payload.itemSort;
  }
  set itemsort(v) {
    this._payload.itemSort = v;
  }

  @api
  get filter() {
    return this._payload.filter;
  }
  set filter(v) {
    this._payload.filter = v;
  }

  @api
  get backgroundcolor() {
    return this._payload.backgroundColor;
  }
  set backgroundcolor(v) {
    this._payload.backgroundColor = v;
  }

  @api
  get titlefontfamily() {
    return this._payload.titleFontFamily;
  }
  set titlefontfamily(v) {
    this._payload.titleFontFamily = v;
  }

  @api
  get titlefontsize() {
    return this._payload.titleFontSize;
  }
  set titlefontsize(v) {
    this._payload.titleFontSize = v;
  }

  @api
  get titlefontstyle() {
    return this._payload.titleFontStyle;
  }
  set titlefontstyle(v) {
    this._payload.titleFontStyle = v;
  }

  @api
  get titlefontcolor() {
    return this._payload.titleFontColor;
  }
  set titlefontcolor(v) {
    this._payload.titleFontColor = v;
  }

  @api
  get titlealign() {
    return this._payload.titleAlign;
  }
  set titlealign(v) {
    this._payload.titleAlign = v;
  }

  @api
  get titlespacing() {
    return this._payload.titleSpacing;
  }
  set titlespacing(v) {
    this._payload.titleSpacing = v;
  }

  @api
  get titlemarginbottom() {
    return this._payload.titleMarginBottom;
  }
  set titlemarginbottom(v) {
    this._payload.titleMarginBottom = v;
  }

  @api
  get bodyfontfamily() {
    return this._payload.bodyFontFamily;
  }
  set bodyfontfamily(v) {
    this._payload.bodyFontFamily = v;
  }

  @api
  get bodyfontsize() {
    return this._payload.bodyFontSize;
  }
  set bodyfontsize(v) {
    this._payload.bodyFontSize = v;
  }

  @api
  get bodyfontstyle() {
    return this._payload.bodyFontStyle;
  }
  set bodyfontstyle(v) {
    this._payload.bodyFontStyle = v;
  }

  @api
  get bodyfontcolor() {
    return this._payload.bodyFontColor;
  }
  set bodyfontcolor(v) {
    this._payload.bodyFontColor = v;
  }

  @api
  get bodyalign() {
    return this._payload.bodyAlign;
  }
  set bodyalign(v) {
    this._payload.bodyAlign = v;
  }

  @api
  get bodyspacing() {
    return this._payload.bodySpacing;
  }
  set bodyspacing(v) {
    this._payload.bodySpacing = v;
  }

  @api
  get footerfontfamily() {
    return this._payload.footerFontFamily;
  }
  set footerfontfamily(v) {
    this._payload.footerFontFamily = v;
  }

  @api
  get footerfontsize() {
    return this._payload.footerFontSize;
  }
  set footerfontsize(v) {
    this._payload.footerFontSize = v;
  }

  @api
  get footerfontstyle() {
    return this._payload.footerFontStyle;
  }
  set footerfontstyle(v) {
    this._payload.footerFontStyle = v;
  }

  @api
  get footerfontcolor() {
    return this._payload.footerFontColor;
  }
  set footerfontcolor(v) {
    this._payload.footerFontColor = v;
  }

  @api
  get footeralign() {
    return this._payload.footerAlign;
  }
  set footeralign(v) {
    this._payload.footerAlign = v;
  }

  @api
  get footerspacing() {
    return this._payload.footerSpacing;
  }
  set footerspacing(v) {
    this._payload.footerSpacing = v;
  }

  @api
  get footermargintop() {
    return this._payload.footerMarginTop;
  }
  set footermargintop(v) {
    this._payload.footerMarginTop = v;
  }

  @api
  get xpadding() {
    return this._payload.xPadding;
  }
  set xpadding(v) {
    this._payload.xPadding = v;
  }

  @api
  get ypadding() {
    return this._payload.yPadding;
  }
  set ypadding(v) {
    this._payload.yPadding = v;
  }

  @api
  get caretpadding() {
    return this._payload.caretPadding;
  }
  set caretpadding(v) {
    this._payload.caretPadding = v;
  }

  @api
  get caretsize() {
    return this._payload.caretSize;
  }
  set caretsize(v) {
    this._payload.caretSize = v;
  }

  @api
  get cornerradius() {
    return this._payload.cornerRadius;
  }
  set cornerradius(v) {
    this._payload.cornerRadius = v;
  }

  @api
  get multikeybackground() {
    return this._payload.multiKeyBackground;
  }
  set multikeybackground(v) {
    this._payload.multiKeyBackground = v;
  }

  @api
  get displaycolors() {
    return this._payload.displayColors;
  }
  set displaycolors(v) {
    this._payload.displayColors = parseBoolean(v);
  }

  @api
  get bordercolor() {
    return this._payload.borderColor;
  }
  set bordercolor(v) {
    this._payload.borderColor = v;
  }

  @api
  get borderwidth() {
    return this._payload.borderWidth;
  }
  set borderwidth(v) {
    this._payload.borderWidth = v;
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

  constructor() {
    super();
    this._option = ATTRIBUTE_TOOLTIPS;
    this._payload.callbacks = this._reactivityManager.getReactivityProxy();
  }
}
