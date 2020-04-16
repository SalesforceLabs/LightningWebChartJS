import CartesianLogarithmicAxis from 'c/cartesianLogarithmicAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('gridZ', 1, { yAxes: [{ gridLines: { z: 1 } }] })
];

describe('c-cartesian-logarithmic-axis', () => {
  testAttribute(CartesianLogarithmicAxis, TEST_DATA_PROPERTIES);
});
