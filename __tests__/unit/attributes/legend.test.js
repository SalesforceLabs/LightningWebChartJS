import Legend from 'c/legend';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('display', true, { display: true }),
  ChartOptionMock('position', 'foo', { position: 'foo' }),
  ChartOptionMock('align', 'foo', { align: 'foo' }),
  ChartOptionMock('fullwidth', 'foo', { fullWidth: 'foo' }),
  ChartOptionMock('reverse', 'foo', { reverse: 'foo' }),
  ChartOptionMock('rtl', 'foo', { rtl: 'foo' }),
  ChartOptionMock('textdirection', 'foo', { textDirection: 'foo' }),
  ChartOptionMock('labelBoxwidth', 'foo', {
    labels: { boxWidth: 'foo' }
  }),
  ChartOptionMock('labelFontsize', 'foo', {
    labels: { fontSize: 'foo' }
  }),
  ChartOptionMock('labelFontstyle', 'foo', {
    labels: { fontStyle: 'foo' }
  }),
  ChartOptionMock('labelFontcolor', 'foo', {
    labels: { fontColor: 'foo' }
  }),
  ChartOptionMock('labelFontfamily', 'foo', {
    labels: { fontFamily: 'foo' }
  }),
  ChartOptionMock('labelPadding', 'foo', {
    labels: { padding: 'foo' }
  }),
  ChartOptionMock('labelUsepointstyle', 'foo', {
    labels: { usePointStyle: 'foo' }
  }),
  ChartOptionMock('labelCallbackOnclick', 'foo', {
    labels: { onClick: 'foo' }
  }),
  ChartOptionMock('labelCallbackOnhover', 'foo', {
    labels: { onHover: 'foo' }
  }),
  ChartOptionMock('labelCallbackOnleave', 'foo', {
    labels: { onLeave: 'foo' }
  }),
  ChartOptionMock('labelCallbackGeneratelabels', 'foo', {
    labels: { generateLabels: 'foo' }
  }),
  ChartOptionMock('labelCallbackFilter', 'foo', {
    labels: { filter: 'foo' }
  })
];

describe('c-legend', () => {
  testAttribute(Legend, TEST_DATA_PROPERTIES);
});
