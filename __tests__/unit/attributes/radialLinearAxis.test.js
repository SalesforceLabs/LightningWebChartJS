import RadialLinearAxis from 'c/radialLinearAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('anglelineDisplay', true, {
    angleLines: { display: true }
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
  ChartOptionMock('gridlineDisplay', true, {
    gridLines: { display: true }
  }),
  ChartOptionMock('gridlineCircular', true, {
    gridLines: { circular: true }
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
  ChartOptionMock('gridlineDrawborder', true, {
    gridLines: { drawBorder: true }
  }),
  ChartOptionMock('gridlineDrawonchartarea', true, {
    gridLines: { drawOnChartArea: true }
  }),
  ChartOptionMock('gridlineDrawticks', true, {
    gridLines: { drawTicks: true }
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
  ChartOptionMock('gridlineOffsetGridLines', true, {
    gridLines: { offsetGridLines: true }
  }),
  ChartOptionMock('gridlineZ', 1, { gridLines: { z: 1 } }),
  ChartOptionMock('pointlabelDisplay', true, {
    pointLabels: { display: true }
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
  ChartOptionMock('tickBeginatzero', true, {
    ticks: { beginAtZero: true }
  }),
  ChartOptionMock('tickMin', 1, { ticks: { min: 1 } }),
  ChartOptionMock('tickMax', 1, { ticks: { max: 1 } }),
  ChartOptionMock('tickMaxtickslimit', 1, {
    ticks: { maxTicksLimit: 1 }
  }),
  ChartOptionMock('tickPrecision', 1, {
    ticks: { precision: 1 }
  }),
  ChartOptionMock('tickStepsize', 1, {
    ticks: { stepSize: 1 }
  }),
  ChartOptionMock('tickSuggestedmax', 1, {
    ticks: { suggestedMax: 1 }
  }),
  ChartOptionMock('tickSuggestedmin', 1, {
    ticks: { suggestedMin: 1 }
  }),
  ChartOptionMock('tickShowlabelbackdrop', true, {
    ticks: { showLabelBackdrop: true }
  })
];

describe('c-radial-linear-axis', () => {
  testAttribute(RadialLinearAxis, TEST_DATA_PROPERTIES);
});
