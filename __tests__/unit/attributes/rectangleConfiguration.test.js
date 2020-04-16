import RectangleConfiguration from 'c/rectangleConfiguration';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('backgroundcolor', 'foo', {
    rectangle: { backgroundColor: 'foo' }
  }),
  ChartOptionMock('borderwidth', 'foo', {
    rectangle: { borderWidth: 'foo' }
  }),
  ChartOptionMock('bordercolor', 'foo', {
    rectangle: { borderColor: 'foo' }
  }),
  ChartOptionMock('borderskipped', 'foo', {
    rectangle: { borderSkipped: 'foo' }
  }),
  ChartOptionMock('borderskipped', 'foo', {
    rectangle: { borderSkipped: 'foo' }
  })
];

describe('c-rectangle-configuration', () => {
  testAttribute(RectangleConfiguration, TEST_DATA_PROPERTIES);
});
