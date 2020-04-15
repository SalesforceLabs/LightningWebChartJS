import Layout from 'c/layout';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('paddingBottom', 10, { padding: { bottom: 10 } }),
  new Handler.ChartOptionMock('paddingLeft', 10, { padding: { left: 10 } }),
  new Handler.ChartOptionMock('paddingRight', 10, { padding: { right: 10 } }),
  new Handler.ChartOptionMock('paddingTop', 10, { padding: { top: 10 } })
];

describe('c-layout', () => {
  Handler.testAttribute(Layout, TEST_DATA_PROPERTIES);
});
