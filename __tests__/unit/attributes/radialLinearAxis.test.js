import RadialLinearAxis from 'c/radialLinearAxis';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('anglelineDisplay', 'foo', {
    angleLines: { display: 'foo' }
  }),
  new Handler.ChartOptionMock('anglelineColor', 'foo', {
    angleLines: { color: 'foo' }
  }),
  new Handler.ChartOptionMock('anglelineLinewidth', 1, {
    angleLines: { lineWidth: 1 }
  }),
  new Handler.ChartOptionMock('anglelineBorderdash', 'foo', {
    angleLines: { borderDash: 'foo' }
  }),
  new Handler.ChartOptionMock('anglelineBorderdashoffset', 1, {
    angleLines: { borderDashOffset: 1 }
  }),
  new Handler.ChartOptionMock('gridlineDisplay', 'foo', {
    gridLines: { display: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineCircular', 'foo', {
    gridLines: { circular: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineColor', 'foo', {
    gridLines: { color: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineBorderdash', 'foo', {
    gridLines: { borderDash: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineBorderdashoffset', 1, {
    gridLines: { borderDashOffset: 1 }
  }),
  new Handler.ChartOptionMock('gridlineLinewidth', 'foo', {
    gridLines: { lineWidth: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineDrawborder', 'foo', {
    gridLines: { drawBorder: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineDrawonchartarea', 'foo', {
    gridLines: { drawOnChartArea: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineDrawticks', 'foo', {
    gridLines: { drawTicks: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineTickmarklength', 1, {
    gridLines: { tickMarkLength: 1 }
  }),
  new Handler.ChartOptionMock('gridlineZerolinewidth', 1, {
    gridLines: { zeroLineWidth: 1 }
  }),
  new Handler.ChartOptionMock('gridlineZerolinecolor', 'foo', {
    gridLines: { zeroLineColor: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineZerolineborderdash', 'foo', {
    gridLines: { zeroLineBorderDash: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineZerolineborderdashoffset', 1, {
    gridLines: { zeroLineBorderDashOffset: 1 }
  }),
  new Handler.ChartOptionMock('gridlineOffsetGridLines', 'foo', {
    gridLines: { offsetGridLines: 'foo' }
  }),
  new Handler.ChartOptionMock('gridlineZ', 1, { gridLines: { z: 1 } }),
  new Handler.ChartOptionMock('pointlabelDisplay', 'foo', {
    pointLabels: { display: 'foo' }
  }),
  new Handler.ChartOptionMock('pointlabelCallback', 'foo', {
    pointLabels: { callback: 'foo' }
  }),
  new Handler.ChartOptionMock('pointlabelFontcolor', 'foo', {
    pointLabels: { fontColor: 'foo' }
  }),
  new Handler.ChartOptionMock('pointlabelFontfamily', 'foo', {
    pointLabels: { fontFamily: 'foo' }
  }),
  new Handler.ChartOptionMock('pointlabelFontsize', 1, {
    pointLabels: { fontSize: 1 }
  }),
  new Handler.ChartOptionMock('pointlabelFontstyle', 'foo', {
    pointLabels: { fontStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('pointlabelLineheight', 'foo', {
    pointLabels: { lineHeight: 'foo' }
  }),
  new Handler.ChartOptionMock('tickBackdropcolor', 'foo', {
    ticks: { backdropColor: 'foo' }
  }),
  new Handler.ChartOptionMock('tickBackdroppaddingx', 1, {
    ticks: { backdropPaddingX: 1 }
  }),
  new Handler.ChartOptionMock('tickBackdroppaddingy', 1, {
    ticks: { backdropPaddingY: 1 }
  }),
  new Handler.ChartOptionMock('tickBeginatzero', 'foo', {
    ticks: { beginAtZero: 'foo' }
  }),
  new Handler.ChartOptionMock('tickMin', 'foo', { ticks: { min: 'foo' } }),
  new Handler.ChartOptionMock('tickMax', 'foo', { ticks: { max: 'foo' } }),
  new Handler.ChartOptionMock('tickMaxtickslimit', 1, {
    ticks: { maxTicksLimit: 1 }
  }),
  new Handler.ChartOptionMock('tickPrecision', 'foo', {
    ticks: { precision: 'foo' }
  }),
  new Handler.ChartOptionMock('tickStepsize', 'foo', {
    ticks: { stepSize: 'foo' }
  }),
  new Handler.ChartOptionMock('tickSuggestedmax', 'foo', {
    ticks: { suggestedMax: 'foo' }
  }),
  new Handler.ChartOptionMock('tickSuggestedmin', 'foo', {
    ticks: { suggestedMin: 'foo' }
  }),
  new Handler.ChartOptionMock('tickShowlabelbackdrop', 'foo', {
    ticks: { showLabelBackdrop: 'foo' }
  })
];

describe('c-radial-linear-axis', () => {
  Handler.testAttribute(RadialLinearAxis, TEST_DATA_PROPERTIES);
});
