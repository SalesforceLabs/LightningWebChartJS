import BaseAttribute from 'c/baseAttribute';
import { ATTRIBUTE_PLUGIN } from 'c/constants';
import { api } from 'lwc';

export default class Plugin extends BaseAttribute {
  @api
  get name() {
    return this._name;
  }
  set name(v) {
    this._name = v;
    this._payload[this.name] = this._content || {};
  }

  @api
  get content() {
    return this._content;
  }
  set content(v) {
    this._content = v;
    if (this._name) {
      this._payload[this.name] = this._content;
    }
  }

  constructor() {
    super();
    this.option = ATTRIBUTE_PLUGIN;
  }
}
