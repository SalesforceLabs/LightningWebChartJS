import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_LINEAR } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/linear.html
 */
export default class CartesianLinearAxis extends CartesianAxis {
    @api
    get ticksBeginatzero() {
        return this._content.ticks.beginAtZero;
    }
    set ticksBeginatzero(v) {
        this._content.ticks.beginAtZero = Boolean(v);
        this._mt.waitNextTask();
    }

    @api
    get ticksMaxtickslimit() {
        return this._content.ticks.maxTicksLimit;
    }
    set ticksMaxtickslimit(v) {
        this._content.ticks.maxTicksLimit = Number(v);
        this._mt.waitNextTask();
    }

    @api
    get ticksPrecision() {
        return this._content.ticks.precision;
    }
    set ticksPrecision(v) {
        this._content.ticks.precision = v;
        this._mt.waitNextTask();
    }

    @api
    get ticksStepsize() {
        return this._content.ticks.stepSize;
    }
    set ticksStepsize(v) {
        this._content.ticks.stepSize = Number(v);
        this._mt.waitNextTask();
    }

    @api
    get ticksSuggestedmax() {
        return this._content.ticks.suggestedMax;
    }
    set ticksSuggestedmax(v) {
        this._content.ticks.suggestedMax = v;
        this._mt.waitNextTask();
    }

    @api
    get ticksSuggestedmin() {
        return this._content.ticks.suggestedMin;
    }
    set ticksSuggestedmin(v) {
        this._content.ticks.suggestedMin = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._content.type = CARTESIAN_AXIS_TYPE_LINEAR;
    }
}
