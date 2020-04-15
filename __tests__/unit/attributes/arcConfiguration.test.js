import ArcConfiguration from 'c/arcConfiguration';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('angle', 'foo', { arc: { angle: 'foo' } }),
  new Handler.ChartOptionMock('backgroundcolor', 'foo', {
    arc: { backgroundColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderalign', 'foo', {
    arc: { borderAlign: 'foo' }
  }),
  new Handler.ChartOptionMock('bordercolor', 'foo', {
    arc: { borderColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderwidth', 'foo', {
    arc: { borderWidth: 'foo' }
  })
];

describe('c-arc-configuration', () => {
  Handler.testAttribute(ArcConfiguration, TEST_DATA_PROPERTIES);
});
