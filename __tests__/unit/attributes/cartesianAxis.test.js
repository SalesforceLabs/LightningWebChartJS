import CartesianAxis from 'c/cartesianAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('axis', 'y', { yAxes: [{}] }),
  ChartOptionMock('type', 'foo', { yAxes: [{ type: 'foo' }] }),
  ChartOptionMock('position', 'foo', {
    yAxes: [{ position: 'foo' }]
  }),
  ChartOptionMock('offset', true, { yAxes: [{ offset: true }] }),
  ChartOptionMock('axisid', 'foo', { yAxes: [{ id: 'foo' }] }),
  ChartOptionMock('ticksMin', 1, {
    yAxes: [{ ticks: { min: 1 } }]
  }),
  ChartOptionMock('ticksMax', 1, {
    yAxes: [{ ticks: { max: 1 } }]
  }),
  ChartOptionMock('ticksSamplesize', 1, {
    yAxes: [{ ticks: { sampleSize: 1 } }]
  }),
  ChartOptionMock('ticksAutoskip', true, {
    yAxes: [{ ticks: { autoSkip: true } }]
  }),
  ChartOptionMock('ticksAutoskippadding', 1, {
    yAxes: [{ ticks: { autoSkipPadding: 1 } }]
  }),
  ChartOptionMock('ticksLabeloffset', 1, {
    yAxes: [{ ticks: { labelOffset: 1 } }]
  }),
  ChartOptionMock('ticksMaxrotation', 1, {
    yAxes: [{ ticks: { maxRotation: 1 } }]
  }),
  ChartOptionMock('ticksMinrotation', 1, {
    yAxes: [{ ticks: { minRotation: 1 } }]
  }),
  ChartOptionMock('ticksMirror', true, {
    yAxes: [{ ticks: { mirror: true } }]
  }),
  ChartOptionMock('ticksPadding', 1, {
    yAxes: [{ ticks: { padding: 1 } }]
  }),
  ChartOptionMock('titleDisplay', true, {
    yAxes: [{ scaleLabel: { display: true } }]
  }),
  ChartOptionMock('titleLabelstring', 'foo', {
    yAxes: [{ scaleLabel: { labelString: 'foo' } }]
  }),
  ChartOptionMock('titleLineheight', 'foo', {
    yAxes: [{ scaleLabel: { lineHeight: 'foo' } }]
  }),
  ChartOptionMock('titleFontcolor', 'foo', {
    yAxes: [{ scaleLabel: { fontColor: 'foo' } }]
  }),
  ChartOptionMock('titleFontfamily', 'foo', {
    yAxes: [{ scaleLabel: { fontFamily: 'foo' } }]
  }),
  ChartOptionMock('titleFontsize', 1, {
    yAxes: [{ scaleLabel: { fontSize: 1 } }]
  }),
  ChartOptionMock('titleFontstyle', 'foo', {
    yAxes: [{ scaleLabel: { fontStyle: 'foo' } }]
  }),
  ChartOptionMock('titlePadding', 'foo', {
    yAxes: [{ scaleLabel: { padding: 'foo' } }]
  }),
  ChartOptionMock('gridDisplay', true, {
    yAxes: [{ gridLines: { display: true } }]
  }),
  ChartOptionMock('gridCircular', true, {
    yAxes: [{ gridLines: { circular: true } }]
  }),
  ChartOptionMock('gridColor', 'foo', {
    yAxes: [{ gridLines: { color: 'foo' } }]
  }),
  ChartOptionMock('gridBorderdash', 'foo', {
    yAxes: [{ gridLines: { borderDash: 'foo' } }]
  }),
  ChartOptionMock('gridBorderdashoffset', 1, {
    yAxes: [{ gridLines: { borderDashOffset: 1 } }]
  }),
  ChartOptionMock('gridLinewidth', 'foo', {
    yAxes: [{ gridLines: { lineWidth: 'foo' } }]
  }),
  ChartOptionMock('gridDrawborder', true, {
    yAxes: [{ gridLines: { drawBorder: true } }]
  }),
  ChartOptionMock('gridDrawonchartarea', true, {
    yAxes: [{ gridLines: { drawOnChartArea: true } }]
  }),
  ChartOptionMock('gridDrawticks', true, {
    yAxes: [{ gridLines: { drawTicks: true } }]
  }),
  ChartOptionMock('gridTickmarklength', 1, {
    yAxes: [{ gridLines: { tickMarkLength: 1 } }]
  }),
  ChartOptionMock('gridZerolinewidth', 1, {
    yAxes: [{ gridLines: { zeroLineWidth: 1 } }]
  }),
  ChartOptionMock('gridZerolinecolor', 'foo', {
    yAxes: [{ gridLines: { zeroLineColor: 'foo' } }]
  }),
  ChartOptionMock('gridZerolineborderdash', 'foo', {
    yAxes: [{ gridLines: { zeroLineBorderDash: 'foo' } }]
  }),
  ChartOptionMock('gridZerolineborderdashoffset', 1, {
    yAxes: [{ gridLines: { zeroLineBorderDashOffset: 1 } }]
  }),
  ChartOptionMock('gridOffsetgridlines', 1, {
    yAxes: [{ gridLines: { offsetGridLines: 1 } }]
  }),
  ChartOptionMock('gridZ', 1, { yAxes: [{ gridLines: { z: 1 } }] }),
  ChartOptionMock('stacked', true, { yAxes: [{ stacked: true }] }),
  ChartOptionMock('axis', 'x', { xAxes: [{}] })
];

describe('c-cartesian-axis', () => {
  testAttribute(CartesianAxis, TEST_DATA_PROPERTIES);
});
