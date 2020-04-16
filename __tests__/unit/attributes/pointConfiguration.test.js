import PointConfiguration from 'c/pointConfiguration';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('radius', 'foo', { point: { radius: 'foo' } }),
  ChartOptionMock('pointstyle', 'foo', {
    point: { pointStyle: 'foo' }
  }),
  ChartOptionMock('rotation', 'foo', {
    point: { rotation: 'foo' }
  }),
  ChartOptionMock('backgroundcolor', 'foo', {
    point: { backgroundColor: 'foo' }
  }),
  ChartOptionMock('borderwidth', 'foo', {
    point: { borderWidth: 'foo' }
  }),
  ChartOptionMock('bordercolor', 'foo', {
    point: { borderColor: 'foo' }
  }),
  ChartOptionMock('hitradius', 'foo', {
    point: { hitRadius: 'foo' }
  }),
  ChartOptionMock('hoverradius', 'foo', {
    point: { hoverRadius: 'foo' }
  }),
  ChartOptionMock('hoverborderwidth', 'foo', {
    point: { hoverBorderWidth: 'foo' }
  })
];

describe('c-point-configuration', () => {
  testAttribute(PointConfiguration, TEST_DATA_PROPERTIES);
});
