import Legend from 'c/legend';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('display', true, { display: true }),
  new Handler.ChartOptionMock('position', 'foo', { position: 'foo' }),
  new Handler.ChartOptionMock('align', 'foo', { align: 'foo' }),
  new Handler.ChartOptionMock('fullwidth', 'foo', { fullWidth: 'foo' }),
  new Handler.ChartOptionMock('reverse', 'foo', { reverse: 'foo' }),
  new Handler.ChartOptionMock('rtl', 'foo', { rtl: 'foo' }),
  new Handler.ChartOptionMock('textdirection', 'foo', { textDirection: 'foo' }),
  new Handler.ChartOptionMock('labelBoxwidth', 'foo', {
    labels: { boxWidth: 'foo' }
  }),
  new Handler.ChartOptionMock('labelFontsize', 'foo', {
    labels: { fontSize: 'foo' }
  }),
  new Handler.ChartOptionMock('labelFontstyle', 'foo', {
    labels: { fontStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('labelFontcolor', 'foo', {
    labels: { fontColor: 'foo' }
  }),
  new Handler.ChartOptionMock('labelFontfamily', 'foo', {
    labels: { fontFamily: 'foo' }
  }),
  new Handler.ChartOptionMock('labelPadding', 'foo', {
    labels: { padding: 'foo' }
  }),
  new Handler.ChartOptionMock('labelUsepointstyle', 'foo', {
    labels: { usePointStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('labelCallbackOnclick', 'foo', {
    labels: { onClick: 'foo' }
  }),
  new Handler.ChartOptionMock('labelCallbackOnhover', 'foo', {
    labels: { onHover: 'foo' }
  }),
  new Handler.ChartOptionMock('labelCallbackOnleave', 'foo', {
    labels: { onLeave: 'foo' }
  }),
  new Handler.ChartOptionMock('labelCallbackGeneratelabels', 'foo', {
    labels: { generateLabels: 'foo' }
  }),
  new Handler.ChartOptionMock('labelCallbackFilter', 'foo', {
    labels: { filter: 'foo' }
  })
];

describe('c-legend', () => {
  Handler.testAttribute(Legend, TEST_DATA_PROPERTIES);
});
