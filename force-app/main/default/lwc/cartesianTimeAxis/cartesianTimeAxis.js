import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_TIME } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/time.html
 */
export default class CartesianTimeAxis extends CartesianAxis {
    @api
    get adapterDate() {
        return this._content.adapters.date;
    }
    set adapterDate(v) {
        this._content.adapters.date = v;
        this._mt.waitNextTask();
    }

    @api
    get distribution() {
        return this._content.distribution;
    }
    set distribution(v) {
        this._content.distribution = v;
        this._mt.waitNextTask();
    }

    @api
    get bounds() {
        return this._content.bounds;
    }
    set bounds(v) {
        this._content.bounds = v;
        this._mt.waitNextTask();
    }

    @api
    get tickSource() {
        return this._content.ticks.source;
    }
    set tickSource(v) {
        this._content.ticks.source = v;
        this._mt.waitNextTask();
    }

    @api
    get timeDisplayformats() {
        return this._content.time.displayFormats;
    }
    set timeDisplayformats(v) {
        this._content.time.displayFormats = v;
        this._mt.waitNextTask();
    }

    @api
    get timeIsoweekday() {
        return this._content.time.isoWeekday;
    }
    set timeIsoweekday(v) {
        this._content.time.isoWeekday = Boolean(v);
        this._mt.waitNextTask();
    }

    @api
    get timeParser() {
        return this._content.time.parser;
    }
    set timeParser(v) {
        this._content.time.parser = v;
        this._mt.waitNextTask();
    }

    @api
    get timeRound() {
        return this._content.time.round;
    }
    set timeRound(v) {
        this._content.time.round = v;
        this._mt.waitNextTask();
    }

    @api
    get timeTooltipformat() {
        return this._content.time.tooltipFormat;
    }
    set timeTooltipformat(v) {
        this._content.time.tooltipFormat = v;
        this._mt.waitNextTask();
    }

    @api
    get timeUnit() {
        return this._content.time.unit;
    }
    set timeUnit(v) {
        this._content.time.unit = v;
        this._mt.waitNextTask();
    }

    @api
    get timeStepsize() {
        return this._content.time.stepSize;
    }
    set timeStepsize(v) {
        this._content.time.stepSize = Number(v);
        this._mt.waitNextTask();
    }
    _timeMinunit;
    @api
    get timeMinunit() {
        return this._content.time.minUnit;
    }
    set timeMinunit(v) {
        this._content.time.minUnit = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._content.type = CARTESIAN_AXIS_TYPE_TIME;
        this._content.adapters = {};
        this._content.time = {};
    }
}
