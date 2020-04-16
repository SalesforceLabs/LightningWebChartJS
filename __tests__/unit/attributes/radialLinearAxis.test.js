import RadialLinearAxis from 'c/radialLinearAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('anglelineDisplay', 'foo', {
    angleLines: { display: 'foo' }
  }),
  ChartOptionMock('anglelineColor', 'foo', {
    angleLines: { color: 'foo' }
  }),
  ChartOptionMock('anglelineLinewidth', 1, {
    angleLines: { lineWidth: 1 }
  }),
  ChartOptionMock('anglelineBorderdash', 'foo', {
    angleLines: { borderDash: 'foo' }
  }),
  ChartOptionMock('anglelineBorderdashoffset', 1, {
    angleLines: { borderDashOffset: 1 }
  }),
  ChartOptionMock('gridlineDisplay', 'foo', {
    gridLines: { display: 'foo' }
  }),
  ChartOptionMock('gridlineCircular', 'foo', {
    gridLines: { circular: 'foo' }
  }),
  ChartOptionMock('gridlineColor', 'foo', {
    gridLines: { color: 'foo' }
  }),
  ChartOptionMock('gridlineBorderdash', 'foo', {
    gridLines: { borderDash: 'foo' }
  }),
  ChartOptionMock('gridlineBorderdashoffset', 1, {
    gridLines: { borderDashOffset: 1 }
  }),
  ChartOptionMock('gridlineLinewidth', 'foo', {
    gridLines: { lineWidth: 'foo' }
  }),
  ChartOptionMock('gridlineDrawborder', 'foo', {
    gridLines: { drawBorder: 'foo' }
  }),
  ChartOptionMock('gridlineDrawonchartarea', 'foo', {
    gridLines: { drawOnChartArea: 'foo' }
  }),
  ChartOptionMock('gridlineDrawticks', 'foo', {
    gridLines: { drawTicks: 'foo' }
  }),
  ChartOptionMock('gridlineTickmarklength', 1, {
    gridLines: { tickMarkLength: 1 }
  }),
  ChartOptionMock('gridlineZerolinewidth', 1, {
    gridLines: { zeroLineWidth: 1 }
  }),
  ChartOptionMock('gridlineZerolinecolor', 'foo', {
    gridLines: { zeroLineColor: 'foo' }
  }),
  ChartOptionMock('gridlineZerolineborderdash', 'foo', {
    gridLines: { zeroLineBorderDash: 'foo' }
  }),
  ChartOptionMock('gridlineZerolineborderdashoffset', 1, {
    gridLines: { zeroLineBorderDashOffset: 1 }
  }),
  ChartOptionMock('gridlineOffsetGridLines', 'foo', {
    gridLines: { offsetGridLines: 'foo' }
  }),
  ChartOptionMock('gridlineZ', 1, { gridLines: { z: 1 } }),
  ChartOptionMock('pointlabelDisplay', 'foo', {
    pointLabels: { display: 'foo' }
  }),
  ChartOptionMock('pointlabelCallback', 'foo', {
    pointLabels: { callback: 'foo' }
  }),
  ChartOptionMock('pointlabelFontcolor', 'foo', {
    pointLabels: { fontColor: 'foo' }
  }),
  ChartOptionMock('pointlabelFontfamily', 'foo', {
    pointLabels: { fontFamily: 'foo' }
  }),
  ChartOptionMock('pointlabelFontsize', 1, {
    pointLabels: { fontSize: 1 }
  }),
  ChartOptionMock('pointlabelFontstyle', 'foo', {
    pointLabels: { fontStyle: 'foo' }
  }),
  ChartOptionMock('pointlabelLineheight', 'foo', {
    pointLabels: { lineHeight: 'foo' }
  }),
  ChartOptionMock('tickBackdropcolor', 'foo', {
    ticks: { backdropColor: 'foo' }
  }),
  ChartOptionMock('tickBackdroppaddingx', 1, {
    ticks: { backdropPaddingX: 1 }
  }),
  ChartOptionMock('tickBackdroppaddingy', 1, {
    ticks: { backdropPaddingY: 1 }
  }),
  ChartOptionMock('tickBeginatzero', 'foo', {
    ticks: { beginAtZero: 'foo' }
  }),
  ChartOptionMock('tickMin', 'foo', { ticks: { min: 'foo' } }),
  ChartOptionMock('tickMax', 'foo', { ticks: { max: 'foo' } }),
  ChartOptionMock('tickMaxtickslimit', 1, {
    ticks: { maxTicksLimit: 1 }
  }),
  ChartOptionMock('tickPrecision', 'foo', {
    ticks: { precision: 'foo' }
  }),
  ChartOptionMock('tickStepsize', 'foo', {
    ticks: { stepSize: 'foo' }
  }),
  ChartOptionMock('tickSuggestedmax', 'foo', {
    ticks: { suggestedMax: 'foo' }
  }),
  ChartOptionMock('tickSuggestedmin', 'foo', {
    ticks: { suggestedMin: 'foo' }
  }),
  ChartOptionMock('tickShowlabelbackdrop', 'foo', {
    ticks: { showLabelBackdrop: 'foo' }
  })
];

describe('c-radial-linear-axis', () => {
  testAttribute(RadialLinearAxis, TEST_DATA_PROPERTIES);
});
