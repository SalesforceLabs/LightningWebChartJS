import CartesianAxis from 'c/cartesianAxis';
import { api } from 'lwc';
import { CARTESIAN_AXIS_TYPE_CATEGORY } from 'c/constants';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/category.html
 */
export default class CartesianCategoryAxis extends CartesianAxis {
  @api
  get ticksLabels() {
    return this._content.ticks.labels;
  }
  set ticksLabels(v) {
    this._content.ticks.labels = v;
  }

  constructor() {
    super();
    this._content.type = CARTESIAN_AXIS_TYPE_CATEGORY;
  }
}
