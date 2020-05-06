import RadialLinearAxis from 'c/radialLinearAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('type', 'foo', {
    type: 'foo'
  })
];

describe('c-radial-linear-axis', () => {
  testAttribute(RadialLinearAxis, TEST_DATA_PROPERTIES);
});
