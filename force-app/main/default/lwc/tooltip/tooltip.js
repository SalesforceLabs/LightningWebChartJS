import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_TOOLTIPS } from 'c/constants';

export default class Tooltip extends BaseAttribute {
    @api
    get enabled() {
        return this._payload.enabled;
    }
    set enabled(v) {
        this._payload.enabled = v;
        this._mt.waitNextTask();
    }

    @api
    get custom() {
        return this._payload.custom;
    }
    set custom(v) {
        this._payload.custom = v;
        this._mt.waitNextTask();
    }

    @api
    get mode() {
        return this._payload.mode;
    }
    set mode(v) {
        this._payload.mode = v;
        this._mt.waitNextTask();
    }

    @api
    get intersect() {
        return this._payload.intersect;
    }
    set intersect(v) {
        this._payload.intersect = v;
        this._mt.waitNextTask();
    }

    @api
    get position() {
        return this._payload.position;
    }
    set position(v) {
        this._payload.position = v;
        this._mt.waitNextTask();
    }

    @api
    get callbacks() {
        return this._payload.callbacks;
    }
    set callbacks(v) {
        this._payload.callbacks = v;
        this._mt.waitNextTask();
    }

    @api
    get itemsort() {
        return this._payload.itemsort;
    }
    set itemsort(v) {
        this._payload.itemsort = v;
        this._mt.waitNextTask();
    }

    @api
    get filter() {
        return this._payload.filter;
    }
    set filter(v) {
        this._payload.filter = v;
        this._mt.waitNextTask();
    }

    @api
    get backgroundcolor() {
        return this._payload.backgroundColor;
    }
    set backgroundcolor(v) {
        this._payload.backgroundColor = v;
        this._mt.waitNextTask();
    }

    @api
    get titlefontfamily() {
        return this._payload.titleFontFamily;
    }
    set titlefontfamily(v) {
        this._payload.titleFontFamily = v;
        this._mt.waitNextTask();
    }

    @api
    get titlefontsize() {
        return this._payload.titleFontSize;
    }
    set titlefontsize(v) {
        this._payload.titleFontSize = v;
        this._mt.waitNextTask();
    }

    @api
    get titlefontstyle() {
        return this._payload.titleFontStyle;
    }
    set titlefontstyle(v) {
        this._payload.titleFontStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get titlefontcolor() {
        return this._payload.titleFontColor;
    }
    set titlefontcolor(v) {
        this._payload.titleFontColor = v;
        this._mt.waitNextTask();
    }

    @api
    get titlealign() {
        return this._payload.titleAlign;
    }
    set titlealign(v) {
        this._payload.titleAlign = v;
        this._mt.waitNextTask();
    }

    @api
    get titlespacing() {
        return this._payload.titleSpacing;
    }
    set titlespacing(v) {
        this._payload.titleSpacing = v;
        this._mt.waitNextTask();
    }

    @api
    get titlemarginbottom() {
        return this._payload.titleMarginBottom;
    }
    set titlemarginbottom(v) {
        this._payload.titleMarginBottom = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyfontfamily() {
        return this._payload.bodyFontFamily;
    }
    set bodyfontfamily(v) {
        this._payload.bodyFontFamily = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyfontsize() {
        return this._payload.bodyFontSize;
    }
    set bodyfontsize(v) {
        this._payload.bodyFontSize = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyfontstyle() {
        return this._payload.bodyFontStyle;
    }
    set bodyfontstyle(v) {
        this._payload.bodyFontStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyfontcolor() {
        return this._payload.bodyFontColor;
    }
    set bodyfontcolor(v) {
        this._payload.bodyFontColor = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyalign() {
        return this._payload.bodyAlign;
    }
    set bodyalign(v) {
        this._payload.bodyAlign = v;
        this._mt.waitNextTask();
    }

    @api
    get bodyspacing() {
        return this._payload.bodySpacing;
    }
    set bodyspacing(v) {
        this._payload.bodySpacing = v;
        this._mt.waitNextTask();
    }

    @api
    get footerfontfamily() {
        return this._payload.footerFontFamily;
    }
    set footerfontfamily(v) {
        this._payload.footerFontFamily = v;
        this._mt.waitNextTask();
    }

    @api
    get footerfontsize() {
        return this._payload.footerFontSize;
    }
    set footerfontsize(v) {
        this._payload.footerFontSize = v;
        this._mt.waitNextTask();
    }

    @api
    get footerfontstyle() {
        return this._payload.footerFontStyle;
    }
    set footerfontstyle(v) {
        this._payload.footerFontStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get footerfontcolor() {
        return this._payload.footerFontColor;
    }
    set footerfontcolor(v) {
        this._payload.footerFontColor = v;
        this._mt.waitNextTask();
    }

    @api
    get footeralign() {
        return this._payload.footerAlign;
    }
    set footeralign(v) {
        this._payload.footerAlign = v;
        this._mt.waitNextTask();
    }

    @api
    get footerspacing() {
        return this._payload.footerSpacing;
    }
    set footerspacing(v) {
        this._payload.footerSpacing = v;
        this._mt.waitNextTask();
    }

    @api
    get footermargintop() {
        return this._payload.footerMarginTop;
    }
    set footermargintop(v) {
        this._payload.footerMarginTop = v;
        this._mt.waitNextTask();
    }

    @api
    get xpadding() {
        return this._payload.xPadding;
    }
    set xpadding(v) {
        this._payload.xPadding = v;
        this._mt.waitNextTask();
    }

    @api
    get ypadding() {
        return this._payload.yPadding;
    }
    set ypadding(v) {
        this._payload.yPadding = v;
        this._mt.waitNextTask();
    }

    @api
    get caretpadding() {
        return this._payload.caretPadding;
    }
    set caretpadding(v) {
        this._payload.caretPadding = v;
        this._mt.waitNextTask();
    }

    @api
    get caretsize() {
        return this._payload.caretSize;
    }
    set caretsize(v) {
        this._payload.caretSize = v;
        this._mt.waitNextTask();
    }

    @api
    get cornerradius() {
        return this._payload.cRrnerEadius;
    }
    set cornerradius(v) {
        this._payload.cornerRadius = v;
        this._mt.waitNextTask();
    }

    @api
    get multikeybackground() {
        return this._payload.multiKeyBackground;
    }
    set multikeybackground(v) {
        this._payload.multiKeyBackground = v;
        this._mt.waitNextTask();
    }

    @api
    get displaycolors() {
        return this._payload.displayColors;
    }
    set displaycolors(v) {
        this._payload.displayColors = v;
        this._mt.waitNextTask();
    }

    @api
    get bordercolor() {
        return this._payload.borderColor;
    }
    set bordercolor(v) {
        this._payload.borderColor = v;
        this._mt.waitNextTask();
    }

    @api
    get borderwidth() {
        return this._payload.borderWidth;
    }
    set borderwidth(v) {
        this._payload.borderWidth = v;
        this._mt.waitNextTask();
    }

    @api
    get rtl() {
        return this._payload.rtl;
    }
    set rtl(v) {
        this._payload.rtl = v;
        this._mt.waitNextTask();
    }

    @api
    get textdirection() {
        return this._payload.textdirection;
    }
    set textdirection(v) {
        this._payload.textDirection = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._option = ATTRIBUTE_TOOLTIPS;
    }
}
