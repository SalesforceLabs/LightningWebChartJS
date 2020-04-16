import RadialAxis from 'c/radialAxis';
import { api } from 'lwc';

/**
 * https://www.chartjs.org/docs/latest/axes/radial/linear.html
 */
export default class RadialLinearAxis extends RadialAxis {
  // AngleLines Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#angle-line-options

  @api
  get anglelineDisplay() {
    return this._payload.angleLines.display;
  }
  set anglelineDisplay(v) {
    this._payload.angleLines.display = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelineColor() {
    return this._payload.angleLines.color;
  }
  set anglelineColor(v) {
    this._payload.angleLines.color = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelineLinewidth() {
    return this._payload.angleLines.lineWidth;
  }
  set anglelineLinewidth(v) {
    this._payload.angleLines.lineWidth = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get anglelineBorderdash() {
    return this._payload.angleLines.borderDash;
  }
  set anglelineBorderdash(v) {
    this._payload.angleLines.borderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelineBorderdashoffset() {
    return this._payload.angleLines.borderDashOffset;
  }
  set anglelineBorderdashoffset(v) {
    this._payload.angleLines.borderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  // GridLines Options: https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration

  @api
  get gridlineDisplay() {
    return this._payload.gridLines.display;
  }
  set gridlineDisplay(v) {
    this._payload.gridLines.display = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineCircular() {
    return this._payload.gridLines.circular;
  }
  set gridlineCircular(v) {
    this._payload.gridLines.circular = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineColor() {
    return this._payload.gridLines.color;
  }
  set gridlineColor(v) {
    this._payload.gridLines.color = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineBorderdash() {
    return this._payload.gridLines.borderDash;
  }
  set gridlineBorderdash(v) {
    this._payload.gridLines.borderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineBorderdashoffset() {
    return this._payload.gridLines.borderDashOffset;
  }
  set gridlineBorderdashoffset(v) {
    this._payload.gridLines.borderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridlineLinewidth() {
    return this._payload.gridLines.lineWidth;
  }
  set gridlineLinewidth(v) {
    this._payload.gridLines.lineWidth = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineDrawborder() {
    return this._payload.gridLines.drawBorder;
  }
  set gridlineDrawborder(v) {
    this._payload.gridLines.drawBorder = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineDrawonchartarea() {
    return this._payload.gridLines.drawOnChartArea;
  }
  set gridlineDrawonchartarea(v) {
    this._payload.gridLines.drawOnChartArea = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineDrawticks() {
    return this._payload.gridLines.drawTicks;
  }
  set gridlineDrawticks(v) {
    this._payload.gridLines.drawTicks = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineTickmarklength() {
    return this._payload.gridLines.tickMarkLength;
  }
  set gridlineTickmarklength(v) {
    this._payload.gridLines.tickMarkLength = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridlineZerolinewidth() {
    return this._payload.gridLines.zeroLineWidth;
  }
  set gridlineZerolinewidth(v) {
    this._payload.gridLines.zeroLineWidth = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridlineZerolinecolor() {
    return this._payload.gridLines.zeroLineColor;
  }
  set gridlineZerolinecolor(v) {
    this._payload.gridLines.zeroLineColor = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineZerolineborderdash() {
    return this._payload.gridLines.zeroLineBorderDash;
  }
  set gridlineZerolineborderdash(v) {
    this._payload.gridLines.zeroLineBorderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineZerolineborderdashoffset() {
    return this._payload.gridLines.zeroLineBorderDashOffset;
  }
  set gridlineZerolineborderdashoffset(v) {
    this._payload.gridLines.zeroLineBorderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridlineOffsetGridLines() {
    return this._payload.gridLines.offsetGridLines;
  }
  set gridlineOffsetGridLines(v) {
    this._payload.gridLines.offsetGridLines = v;
    this._mt.waitNextTask();
  }

  @api
  get gridlineZ() {
    return this._payload.gridLines.z;
  }
  set gridlineZ(v) {
    this._payload.gridLines.z = Number(v);
    this._mt.waitNextTask();
  }

  // PointLabels Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#point-label-options

  @api
  get pointlabelDisplay() {
    return this._payload.pointLabels.display;
  }
  set pointlabelDisplay(v) {
    this._payload.pointLabels.display = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelCallback() {
    return this._payload.pointLabels.callback;
  }
  set pointlabelCallback(v) {
    this._payload.pointLabels.callback = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelFontcolor() {
    return this._payload.pointLabels.fontColor;
  }
  set pointlabelFontcolor(v) {
    this._payload.pointLabels.fontColor = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelFontfamily() {
    return this._payload.pointLabels.fontFamily;
  }
  set pointlabelFontfamily(v) {
    this._payload.pointLabels.fontFamily = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelFontsize() {
    return this._payload.pointLabels.fontSize;
  }
  set pointlabelFontsize(v) {
    this._payload.pointLabels.fontSize = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get pointlabelFontstyle() {
    return this._payload.pointLabels.fontStyle;
  }
  set pointlabelFontstyle(v) {
    this._payload.pointLabels.fontStyle = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelLineheight() {
    return this._payload.pointLabels.lineHeight;
  }
  set pointlabelLineheight(v) {
    this._payload.pointLabels.lineHeight = v;
    this._mt.waitNextTask();
  }

  // Ticks Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#tick-options

  @api
  get tickBackdropcolor() {
    return this._payload.ticks.backdropColor;
  }
  set tickBackdropcolor(v) {
    this._payload.ticks.backdropColor = v;
    this._mt.waitNextTask();
  }

  @api
  get tickBackdroppaddingx() {
    return this._payload.ticks.backdropPaddingX;
  }
  set tickBackdroppaddingx(v) {
    this._payload.ticks.backdropPaddingX = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get tickBackdroppaddingy() {
    return this._payload.ticks.backdropPaddingY;
  }
  set tickBackdroppaddingy(v) {
    this._payload.ticks.backdropPaddingY = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get tickBeginatzero() {
    return this._payload.ticks.beginAtZero;
  }
  set tickBeginatzero(v) {
    this._payload.ticks.beginAtZero = v;
    this._mt.waitNextTask();
  }

  @api
  get tickMin() {
    return this._payload.ticks.min;
  }
  set tickMin(v) {
    this._payload.ticks.min = v;
    this._mt.waitNextTask();
  }

  @api
  get tickMax() {
    return this._payload.ticks.max;
  }
  set tickMax(v) {
    this._payload.ticks.max = v;
    this._mt.waitNextTask();
  }

  @api
  get tickMaxtickslimit() {
    return this._payload.ticks.maxTicksLimit;
  }
  set tickMaxtickslimit(v) {
    this._payload.ticks.maxTicksLimit = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get tickPrecision() {
    return this._payload.ticks.precision;
  }
  set tickPrecision(v) {
    this._payload.ticks.precision = v;
    this._mt.waitNextTask();
  }

  @api
  get tickStepsize() {
    return this._payload.ticks.stepSize;
  }
  set tickStepsize(v) {
    this._payload.ticks.stepSize = v;
    this._mt.waitNextTask();
  }

  @api
  get tickSuggestedmax() {
    return this._payload.ticks.suggestedMax;
  }
  set tickSuggestedmax(v) {
    this._payload.ticks.suggestedMax = v;
    this._mt.waitNextTask();
  }

  @api
  get tickSuggestedmin() {
    return this._payload.ticks.suggestedMin;
  }
  set tickSuggestedmin(v) {
    this._payload.ticks.suggestedMin = v;
    this._mt.waitNextTask();
  }

  @api
  get tickShowlabelbackdrop() {
    return this._payload.ticks.showLabelBackdrop;
  }
  set tickShowlabelbackdrop(v) {
    this._payload.ticks.showLabelBackdrop = v;
    this._mt.waitNextTask();
  }

  constructor() {
    super();
    this._payload.angleLines = {};
    this._payload.gridLines = {};
    this._payload.pointLabels = {};
    this._payload.ticks = {};
  }
}
