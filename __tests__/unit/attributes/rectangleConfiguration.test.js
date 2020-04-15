import RectangleConfiguration from 'c/rectangleConfiguration';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('backgroundcolor', 'foo', {
    rectangle: { backgroundColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderwidth', 'foo', {
    rectangle: { borderWidth: 'foo' }
  }),
  new Handler.ChartOptionMock('bordercolor', 'foo', {
    rectangle: { borderColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderskipped', 'foo', {
    rectangle: { borderSkipped: 'foo' }
  }),
  new Handler.ChartOptionMock('borderskipped', 'foo', {
    rectangle: { borderSkipped: 'foo' }
  })
];

describe('c-rectangle-configuration', () => {
  Handler.testAttribute(RectangleConfiguration, TEST_DATA_PROPERTIES);
});
