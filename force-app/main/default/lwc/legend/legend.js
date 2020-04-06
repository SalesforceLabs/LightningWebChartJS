import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_LEGEND } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/configuration/legend.html
 */
export default class Legend extends BaseAttribute {
    @api
    get display() {
        return this._payload.display;
    }
    set display(v) {
        this._payload.display = Boolean(v);
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
    get align() {
        return this._payload.align;
    }
    set align(v) {
        this._payload.align = v;
        this._mt.waitNextTask();
    }

    @api
    get fullwidth() {
        return this._payload.fullWidth;
    }
    set fullwidth(v) {
        this._payload.fullWidth = v;
        this._mt.waitNextTask();
    }

    @api
    get reverse() {
        return this._payload.reverse;
    }
    set reverse(v) {
        this._payload.reverse = v;
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
        return this._payload.textDirection;
    }
    set textdirection(v) {
        this._payload.textDirection = v;
        this._mt.waitNextTask();
    }

    @api
    get labelBoxwidth() {
        return this._payload.labels.boxWidth;
    }
    set labelBoxwidth(v) {
        this._payload.labels.boxWidth = v;
        this._mt.waitNextTask();
    }

    @api
    get labelFontsize() {
        return this._payload.labels.fontSize;
    }
    set labelFontsize(v) {
        this._payload.labels.fontSize = v;
        this._mt.waitNextTask();
    }

    @api
    get labelFontstyle() {
        return this._payload.labels.fontStyle;
    }
    set labelFontstyle(v) {
        this._payload.labels.fontStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get labelFontcolor() {
        return this._payload.labels.fontColor;
    }
    set labelFontcolor(v) {
        this._payload.labels.fontColor = v;
        this._mt.waitNextTask();
    }
    @api
    get labelFontfamily() {
        return this._payload.labels.fontFamily;
    }
    set labelFontfamily(v) {
        this._payload.labels.fontFamily = v;
        this._mt.waitNextTask();
    }

    @api
    get labelPadding() {
        return this._payload.labels.padding;
    }
    set labelPadding(v) {
        this._payload.labels.padding = v;
        this._mt.waitNextTask();
    }

    @api
    get labelUsepointstyle() {
        return this._payload.labels.usePointStyle;
    }
    set labelUsepointstyle(v) {
        this._payload.labels.usePointStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get callbackOnclick() {
        return this._payload.labels.onClick;
    }
    set callbackOnclick(v) {
        this._payload.labels.onClick = v;
        this._mt.waitNextTask();
    }
    @api
    get callbackOnhover() {
        return this._payload.labels.onHover;
    }
    set callbackOnhover(v) {
        this._payload.labels.onHover = v;
        this._mt.waitNextTask();
    }
    @api
    get callbackOnleave() {
        return this._payload.labels.onLeave;
    }
    set callbackOnleave(v) {
        this._payload.labels.onLeave = v;
        this._callbackOnleave = v;
        this._mt.waitNextTask();
    }

    @api
    get labelCallbackGeneratelabels() {
        return this._payload.labels.generateLabels;
    }
    set callbackGeneratelabels(v) {
        this._payload.labels.generateLabels = v;
        this._mt.waitNextTask();
    }

    @api
    get labelCallbackFilter() {
        return this._payload.labels.filter;
    }
    set labelCallbackFilter(v) {
        this._payload.labels.filter = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._payload.display = true;
        this._payload.labels = {};
        this._option = ATTRIBUTE_LEGEND;
    }
}
