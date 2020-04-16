import Layout from 'c/layout';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('paddingBottom', 10, { padding: { bottom: 10 } }),
  ChartOptionMock('paddingLeft', 10, { padding: { left: 10 } }),
  ChartOptionMock('paddingRight', 10, { padding: { right: 10 } }),
  ChartOptionMock('paddingTop', 10, { padding: { top: 10 } })
];

describe('c-layout', () => {
  testAttribute(Layout, TEST_DATA_PROPERTIES);
});
