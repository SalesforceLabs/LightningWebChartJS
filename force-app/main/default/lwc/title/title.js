import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_TITLE } from 'c/constants';

export default class Title extends BaseAttribute {
    @api
    get text() {
        return this._payload.text;
    }
    set text(v) {
        this._payload.text = v;
        this._mt.waitNextTask();
    }

    constructor() {
        super();
        this._payload.display = true;
        this._option = ATTRIBUTE_TITLE;
    }
}
