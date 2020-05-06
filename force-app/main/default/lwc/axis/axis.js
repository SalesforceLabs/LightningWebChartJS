import { api } from 'lwc';
import { nanoid } from 'c/nanoid';
import { ATTRIBUTE_CARTESIAN_AXES, ATTRIBUTE_RADIAL_AXES } from 'c/constants';
import BaseAttribute from 'c/baseAttribute';

export default class Axis extends BaseAttribute {
  @api
  get type() {
    return this._payload.type;
  }
  set type(v) {
    this._payload.type = v;
  }

  @api
  get gridtype() {
    return this._option;
  }
  set gridtype(v) {
    this._option = [ATTRIBUTE_CARTESIAN_AXES, ATTRIBUTE_RADIAL_AXES].includes(v)
      ? v
      : ATTRIBUTE_CARTESIAN_AXES;
  }

  constructor() {
    super();
    this._payload.uuid = nanoid(10);
    this._option = ATTRIBUTE_CARTESIAN_AXES;
  }
}
