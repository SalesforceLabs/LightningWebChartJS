import CartesianLogarithmicAxis from 'c/cartesianLogarithmicAxis';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('gridZ', 1, { yAxes: [{ gridLines: { z: 1 } }] })
];

describe('c-layout', () => {
  Handler.testAttribute(CartesianLogarithmicAxis, TEST_DATA_PROPERTIES);
});
