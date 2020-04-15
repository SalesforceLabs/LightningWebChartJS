import PointConfiguration from 'c/pointConfiguration';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('radius', 'foo', { point: { radius: 'foo' } }),
  new Handler.ChartOptionMock('pointstyle', 'foo', {
    point: { pointStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('rotation', 'foo', {
    point: { rotation: 'foo' }
  }),
  new Handler.ChartOptionMock('backgroundcolor', 'foo', {
    point: { backgroundColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderwidth', 'foo', {
    point: { borderWidth: 'foo' }
  }),
  new Handler.ChartOptionMock('bordercolor', 'foo', {
    point: { borderColor: 'foo' }
  }),
  new Handler.ChartOptionMock('hitradius', 'foo', {
    point: { hitRadius: 'foo' }
  }),
  new Handler.ChartOptionMock('hoverradius', 'foo', {
    point: { hoverRadius: 'foo' }
  }),
  new Handler.ChartOptionMock('hoverborderwidth', 'foo', {
    point: { hoverBorderWidth: 'foo' }
  })
];

describe('c-point-configuration', () => {
  Handler.testAttribute(PointConfiguration, TEST_DATA_PROPERTIES);
});
