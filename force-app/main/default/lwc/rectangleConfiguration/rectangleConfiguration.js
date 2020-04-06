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
        this._mt.waitNextTask();
    }

    @api
    get borderwidth() {
        return this._payload.rectangle.borderWidth;
    }
    set borderwidth(v) {
        this._payload.rectangle.borderWidth = v;
        this._mt.waitNextTask();
    }

    @api
    get bordercolor() {
        return this._payload.rectangle.borderColor;
    }
    set bordercolor(v) {
        this._payload.rectangle.borderColor = v;
        this._mt.waitNextTask();
    }

    @api
    get borderskipped() {
        return this._payload.rectangle.borderSkipped;
    }
    set borderskipped(v) {
        this._payload.rectangle.borderSkipped = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._payload.rectangle = {};
        this._option = ATTRIBUTE_ELEMENTS;
    }
}
