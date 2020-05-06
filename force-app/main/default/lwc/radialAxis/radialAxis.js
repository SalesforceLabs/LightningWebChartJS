import BaseAxis from 'c/baseAxis';
import { ATTRIBUTE_RADIAL_AXES } from 'c/constants';
import { api } from 'lwc';

/**
 * https://www.chartjs.org/docs/latest/axes/radial/
 *
 * NOTES:
 *      Radial axes are available only for Radar and Polar area chart types
 */
export default class RadialAxis extends BaseAxis {
  @api
  get type() {
    return this._payload.type;
  }
  set type(v) {
    this._payload.type = v;
  }

  constructor() {
    super();
    this._option = ATTRIBUTE_RADIAL_AXES;
  }
}
