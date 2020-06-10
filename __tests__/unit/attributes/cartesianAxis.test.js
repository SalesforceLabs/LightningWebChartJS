import CartesianAxis from 'c/cartesianAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('axis', 'y', { yAxes: [{}] }),
  ChartOptionMock('type', 'foo', { yAxes: [{ type: 'foo' }] }),
  ChartOptionMock('position', 'foo', {
    yAxes: [{ position: 'foo' }]
  }),
  ChartOptionMock('offset', 'foo', { yAxes: [{ offset: 'foo' }] }),
  ChartOptionMock('id', 'foo', { yAxes: [{ id: 'foo' }] }),
  ChartOptionMock('tickMin', 'foo', {
    yAxes: [{ ticks: { min: 'foo' } }]
  }),
  ChartOptionMock('tickMax', 'foo', {
    yAxes: [{ ticks: { max: 'foo' } }]
  }),
  ChartOptionMock('tickSamplesize', 1, {
    yAxes: [{ ticks: { sampleSize: 1 } }]
  }),
  ChartOptionMock('tickAutoskip', 'foo', {
    yAxes: [{ ticks: { autoSkip: 'foo' } }]
  }),
  ChartOptionMock('tickAutoskippadding', 1, {
    yAxes: [{ ticks: { autoSkipPadding: 1 } }]
  }),
  ChartOptionMock('tickLabeloffset', 1, {
    yAxes: [{ ticks: { labelOffset: 1 } }]
  }),
  ChartOptionMock('tickMaxrotation', 1, {
    yAxes: [{ ticks: { maxRotation: 1 } }]
  }),
  ChartOptionMock('tickMinrotation', 1, {
    yAxes: [{ ticks: { minRotation: 1 } }]
  }),
  ChartOptionMock('tickMirror', 'foo', {
    yAxes: [{ ticks: { mirror: 'foo' } }]
  }),
  ChartOptionMock('tickPadding', 1, {
    yAxes: [{ ticks: { padding: 1 } }]
  }),
  ChartOptionMock('titleDisplay', 'foo', {
    yAxes: [{ scaleLabel: { display: 'foo' } }]
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
  ChartOptionMock('gridDisplay', 'foo', {
    yAxes: [{ gridLines: { display: 'foo' } }]
  }),
  ChartOptionMock('gridCircular', 'foo', {
    yAxes: [{ gridLines: { circular: 'foo' } }]
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
  ChartOptionMock('gridDrawborder', 'foo', {
    yAxes: [{ gridLines: { drawBorder: 'foo' } }]
  }),
  ChartOptionMock('gridDrawonchartarea', 'foo', {
    yAxes: [{ gridLines: { drawOnChartArea: 'foo' } }]
  }),
  ChartOptionMock('gridDrawticks', 'foo', {
    yAxes: [{ gridLines: { drawTicks: 'foo' } }]
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
