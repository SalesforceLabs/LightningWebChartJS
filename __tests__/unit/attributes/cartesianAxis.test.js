import CartesianAxis from 'c/cartesianAxis';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('axis', 'y', { yAxes: [{}] }),
  new Handler.ChartOptionMock('type', 'foo', { yAxes: [{ type: 'foo' }] }),
  new Handler.ChartOptionMock('position', 'foo', {
    yAxes: [{ position: 'foo' }]
  }),
  new Handler.ChartOptionMock('offset', 'foo', { yAxes: [{ offset: 'foo' }] }),
  new Handler.ChartOptionMock('id', 'foo', { yAxes: [{ id: 'foo' }] }),
  new Handler.ChartOptionMock('ticksMin', 'foo', {
    yAxes: [{ ticks: { min: 'foo' } }]
  }),
  new Handler.ChartOptionMock('ticksMax', 'foo', {
    yAxes: [{ ticks: { max: 'foo' } }]
  }),
  new Handler.ChartOptionMock('ticksSamplesize', 1, {
    yAxes: [{ ticks: { sampleSize: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksAutoskip', 'foo', {
    yAxes: [{ ticks: { autoSkip: 'foo' } }]
  }),
  new Handler.ChartOptionMock('ticksAutoskippadding', 1, {
    yAxes: [{ ticks: { autoSkipPadding: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksLabeloffset', 1, {
    yAxes: [{ ticks: { labelOffset: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksMaxrotation', 1, {
    yAxes: [{ ticks: { maxRotation: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksMinrotation', 1, {
    yAxes: [{ ticks: { minRotation: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksMirror', 'foo', {
    yAxes: [{ ticks: { mirror: 'foo' } }]
  }),
  new Handler.ChartOptionMock('ticksPadding', 1, {
    yAxes: [{ ticks: { padding: 1 } }]
  }),
  new Handler.ChartOptionMock('titleDisplay', 'foo', {
    yAxes: [{ scaleLabel: { display: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titleLabelstring', 'foo', {
    yAxes: [{ scaleLabel: { labelString: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titleLineheight', 'foo', {
    yAxes: [{ scaleLabel: { lineHeight: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titleFontcolor', 'foo', {
    yAxes: [{ scaleLabel: { fontColor: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titleFontfamily', 'foo', {
    yAxes: [{ scaleLabel: { fontFamily: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titleFontsize', 1, {
    yAxes: [{ scaleLabel: { fontSize: 1 } }]
  }),
  new Handler.ChartOptionMock('titleFontstyle', 'foo', {
    yAxes: [{ scaleLabel: { fontStyle: 'foo' } }]
  }),
  new Handler.ChartOptionMock('titlePadding', 'foo', {
    yAxes: [{ scaleLabel: { padding: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridDisplay', 'foo', {
    yAxes: [{ gridLines: { display: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridCircular', 'foo', {
    yAxes: [{ gridLines: { circular: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridColor', 'foo', {
    yAxes: [{ gridLines: { color: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridBorderdash', 'foo', {
    yAxes: [{ gridLines: { borderDash: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridBorderdashoffset', 1, {
    yAxes: [{ gridLines: { borderDashOffset: 1 } }]
  }),
  new Handler.ChartOptionMock('gridLinewidth', 'foo', {
    yAxes: [{ gridLines: { lineWidth: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridDrawborder', 'foo', {
    yAxes: [{ gridLines: { drawBorder: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridDrawonchartarea', 'foo', {
    yAxes: [{ gridLines: { drawOnChartArea: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridDrawticks', 'foo', {
    yAxes: [{ gridLines: { drawTicks: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridTickmarklength', 1, {
    yAxes: [{ gridLines: { tickMarkLength: 1 } }]
  }),
  new Handler.ChartOptionMock('gridZerolinewidth', 1, {
    yAxes: [{ gridLines: { zeroLineWidth: 1 } }]
  }),
  new Handler.ChartOptionMock('gridZerolinecolor', 'foo', {
    yAxes: [{ gridLines: { zeroLineColor: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridZerolineborderdash', 'foo', {
    yAxes: [{ gridLines: { zeroLineBorderDash: 'foo' } }]
  }),
  new Handler.ChartOptionMock('gridZerolineborderdashoffset', 1, {
    yAxes: [{ gridLines: { zeroLineBorderDashOffset: 1 } }]
  }),
  new Handler.ChartOptionMock('gridOffsetgridlines', 1, {
    yAxes: [{ gridLines: { offsetGridLines: 1 } }]
  }),
  new Handler.ChartOptionMock('gridZ', 1, { yAxes: [{ gridLines: { z: 1 } }] })
];

describe('c-layout', () => {
  Handler.testAttribute(CartesianAxis, TEST_DATA_PROPERTIES);
});
