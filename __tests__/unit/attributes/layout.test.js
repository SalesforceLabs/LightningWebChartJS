import Layout from 'c/layout';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('paddingBottom', 'foo', {
    padding: { bottom: 'foo' }
  }),
  new Handler.ChartOptionMock('paddingLeft', 'foo', {
    padding: { left: 'foo' }
  }),
  new Handler.ChartOptionMock('paddingRight', 'foo', {
    padding: { right: 'foo' }
  }),
  new Handler.ChartOptionMock('paddingTop', 'foo', { padding: { top: 'foo' } })
];

describe('c-layout', () => {
  Handler.testAttribute(Layout, TEST_DATA_PROPERTIES);
});
