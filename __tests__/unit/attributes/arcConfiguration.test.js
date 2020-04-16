import ArcConfiguration from 'c/arcConfiguration';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('angle', 'foo', { arc: { angle: 'foo' } }),
  ChartOptionMock('backgroundcolor', 'foo', {
    arc: { backgroundColor: 'foo' }
  }),
  ChartOptionMock('borderalign', 'foo', {
    arc: { borderAlign: 'foo' }
  }),
  ChartOptionMock('bordercolor', 'foo', {
    arc: { borderColor: 'foo' }
  }),
  ChartOptionMock('borderwidth', 'foo', {
    arc: { borderWidth: 'foo' }
  })
];

describe('c-arc-configuration', () => {
  testAttribute(ArcConfiguration, TEST_DATA_PROPERTIES);
});
