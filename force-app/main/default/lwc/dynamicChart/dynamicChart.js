import BaseChart from 'c/baseChart';
import { api } from 'lwc';
import { ATTRIBUTE_TITLE } from 'c/constants';

export default class DynamicChart extends BaseChart {
  @api
  get type() {
    return this._type;
  }
  set type(v) {
    this._type = v;
    this.ariaLabel =
      this._payload[ATTRIBUTE_TITLE] && this._payload[ATTRIBUTE_TITLE].text
        ? this._payload[ATTRIBUTE_TITLE].text
        : `${this._type} chart`;
  }
}
