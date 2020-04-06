import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_ELEMENTS } from 'c/constants';

export default class LineConfiguration extends BaseAttribute {
    @api
    get tension() {
        return this._payload.line.tension;
    }
    set tension(v) {
        this._payload.line.tension = v;
        this._mt.waitNextTask();
    }

    @api
    get backgroundcolor() {
        return this._payload.line.backgroundColor;
    }
    set backgroundcolor(v) {
        this._payload.line.backgroundColor = v;
        this._mt.waitNextTask();
    }

    @api
    get borderwidth() {
        return this._payload.line.borderWidth;
    }
    set borderwidth(v) {
        this._payload.line.borderWidth = v;
        this._mt.waitNextTask();
    }

    @api
    get bordercolor() {
        return this._payload.line.borderColor;
    }
    set bordercolor(v) {
        this._payload.line.borderColor = v;
        this._mt.waitNextTask();
    }

    @api
    get bordercapstyle() {
        return this._payload.line.borderCapStyle;
    }
    set bordercapstyle(v) {
        this._payload.line.borderCapStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get borderdash() {
        return this._payload.line.borderDash;
    }
    set borderdash(v) {
        this._payload.line.borderDash = v;
        this._mt.waitNextTask();
    }

    @api
    get borderdashoffset() {
        return this._payload.line.borderDashOffset;
    }
    set borderdashoffset(v) {
        this._payload.line.borderDashOffset = v;
        this._mt.waitNextTask();
    }

    @api
    get borderjoinstyle() {
        return this._payload.line.borderJoinStyle;
    }
    set borderjoinstyle(v) {
        this._payload.line.borderJoinStyle = v;
        this._mt.waitNextTask();
    }

    @api
    get capbezierpoints() {
        return this._payload.line.capBezierPoints;
    }
    set capbezierpoints(v) {
        this._payload.line.capBezierPoints = v;
        this._mt.waitNextTask();
    }

    @api
    get cubicinterpolationmode() {
        return this._payload.line.cubicInterpolationMode;
    }
    set cubicinterpolationmode(v) {
        this._payload.line.cubicInterpolationMode = v;
        this._mt.waitNextTask();
    }

    @api
    get fill() {
        return this._payload.line.fill;
    }
    set fill(v) {
        this._payload.line.fill._fill = v;
        this._mt.waitNextTask();
    }

    @api
    get stepped() {
        return this._payload.line.stepped;
    }
    set stepped(v) {
        this._payload.line.stepped = v;
        this._mt.waitNextTask();
    }

    // Radar Chart specific
    @api
    get spangaps() {
        return this._payload.line.spanGaps;
    }
    set spangaps(v) {
        this._payload.line.spanGaps = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._payload.line = {};
        this._option = ATTRIBUTE_ELEMENTS;
    }
}
