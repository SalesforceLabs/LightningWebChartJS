import RadialAxis from 'c/radialAxis';
import { api } from 'lwc';
import { parseBoolean } from 'c/utils';

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
    this._payload.angleLines.display = parseBoolean(v);
  }

  @api
  get anglelineColor() {
    return this._payload.angleLines.color;
  }
  set anglelineColor(v) {
    this._payload.angleLines.color = v;
  }

  @api
  get anglelineLinewidth() {
    return this._payload.angleLines.lineWidth;
  }
  set anglelineLinewidth(v) {
    this._payload.angleLines.lineWidth = Number(v);
  }

  @api
  get anglelineBorderdash() {
    return this._payload.angleLines.borderDash;
  }
  set anglelineBorderdash(v) {
    this._payload.angleLines.borderDash = v;
  }

  @api
  get anglelineBorderdashoffset() {
    return this._payload.angleLines.borderDashOffset;
  }
  set anglelineBorderdashoffset(v) {
    this._payload.angleLines.borderDashOffset = Number(v);
  }

  // GridLines Options: https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration

  @api
  get gridlineDisplay() {
    return this._payload.gridLines.display;
  }
  set gridlineDisplay(v) {
    this._payload.gridLines.display = parseBoolean(v);
  }

  @api
  get gridlineCircular() {
    return this._payload.gridLines.circular;
  }
  set gridlineCircular(v) {
    this._payload.gridLines.circular = parseBoolean(v);
  }

  @api
  get gridlineColor() {
    return this._payload.gridLines.color;
  }
  set gridlineColor(v) {
    this._payload.gridLines.color = v;
  }

  @api
  get gridlineBorderdash() {
    return this._payload.gridLines.borderDash;
  }
  set gridlineBorderdash(v) {
    this._payload.gridLines.borderDash = v;
  }

  @api
  get gridlineBorderdashoffset() {
    return this._payload.gridLines.borderDashOffset;
  }
  set gridlineBorderdashoffset(v) {
    this._payload.gridLines.borderDashOffset = Number(v);
  }

  @api
  get gridlineLinewidth() {
    return this._payload.gridLines.lineWidth;
  }
  set gridlineLinewidth(v) {
    this._payload.gridLines.lineWidth = v;
  }

  @api
  get gridlineDrawborder() {
    return this._payload.gridLines.drawBorder;
  }
  set gridlineDrawborder(v) {
    this._payload.gridLines.drawBorder = parseBoolean(v);
  }

  @api
  get gridlineDrawonchartarea() {
    return this._payload.gridLines.drawOnChartArea;
  }
  set gridlineDrawonchartarea(v) {
    this._payload.gridLines.drawOnChartArea = parseBoolean(v);
  }

  @api
  get gridlineDrawticks() {
    return this._payload.gridLines.drawTicks;
  }
  set gridlineDrawticks(v) {
    this._payload.gridLines.drawTicks = parseBoolean(v);
  }

  @api
  get gridlineTickmarklength() {
    return this._payload.gridLines.tickMarkLength;
  }
  set gridlineTickmarklength(v) {
    this._payload.gridLines.tickMarkLength = Number(v);
  }

  @api
  get gridlineZerolinewidth() {
    return this._payload.gridLines.zeroLineWidth;
  }
  set gridlineZerolinewidth(v) {
    this._payload.gridLines.zeroLineWidth = Number(v);
  }

  @api
  get gridlineZerolinecolor() {
    return this._payload.gridLines.zeroLineColor;
  }
  set gridlineZerolinecolor(v) {
    this._payload.gridLines.zeroLineColor = v;
  }

  @api
  get gridlineZerolineborderdash() {
    return this._payload.gridLines.zeroLineBorderDash;
  }
  set gridlineZerolineborderdash(v) {
    this._payload.gridLines.zeroLineBorderDash = v;
  }

  @api
  get gridlineZerolineborderdashoffset() {
    return this._payload.gridLines.zeroLineBorderDashOffset;
  }
  set gridlineZerolineborderdashoffset(v) {
    this._payload.gridLines.zeroLineBorderDashOffset = Number(v);
  }

  @api
  get gridlineOffsetGridLines() {
    return this._payload.gridLines.offsetGridLines;
  }
  set gridlineOffsetGridLines(v) {
    this._payload.gridLines.offsetGridLines = parseBoolean(v);
  }

  @api
  get gridlineZ() {
    return this._payload.gridLines.z;
  }
  set gridlineZ(v) {
    this._payload.gridLines.z = Number(v);
  }

  // PointLabels Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#point-label-options

  @api
  get pointlabelDisplay() {
    return this._payload.pointLabels.display;
  }
  set pointlabelDisplay(v) {
    this._payload.pointLabels.display = parseBoolean(v);
  }

  @api
  get pointlabelCallback() {
    return this._payload.pointLabels.callback;
  }
  set pointlabelCallback(v) {
    this._payload.pointLabels.callback = v;
  }

  @api
  get pointlabelFontcolor() {
    return this._payload.pointLabels.fontColor;
  }
  set pointlabelFontcolor(v) {
    this._payload.pointLabels.fontColor = v;
  }

  @api
  get pointlabelFontfamily() {
    return this._payload.pointLabels.fontFamily;
  }
  set pointlabelFontfamily(v) {
    this._payload.pointLabels.fontFamily = v;
  }

  @api
  get pointlabelFontsize() {
    return this._payload.pointLabels.fontSize;
  }
  set pointlabelFontsize(v) {
    this._payload.pointLabels.fontSize = Number(v);
  }

  @api
  get pointlabelFontstyle() {
    return this._payload.pointLabels.fontStyle;
  }
  set pointlabelFontstyle(v) {
    this._payload.pointLabels.fontStyle = v;
  }

  @api
  get pointlabelLineheight() {
    return this._payload.pointLabels.lineHeight;
  }
  set pointlabelLineheight(v) {
    this._payload.pointLabels.lineHeight = v;
  }

  // Ticks Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#tick-options

  @api
  get tickBackdropcolor() {
    return this._payload.ticks.backdropColor;
  }
  set tickBackdropcolor(v) {
    this._payload.ticks.backdropColor = v;
  }

  @api
  get tickBackdroppaddingx() {
    return this._payload.ticks.backdropPaddingX;
  }
  set tickBackdroppaddingx(v) {
    this._payload.ticks.backdropPaddingX = Number(v);
  }

  @api
  get tickBackdroppaddingy() {
    return this._payload.ticks.backdropPaddingY;
  }
  set tickBackdroppaddingy(v) {
    this._payload.ticks.backdropPaddingY = Number(v);
  }

  @api
  get tickBeginatzero() {
    return this._payload.ticks.beginAtZero;
  }
  set tickBeginatzero(v) {
    this._payload.ticks.beginAtZero = parseBoolean(v);
  }

  @api
  get tickMin() {
    return this._payload.ticks.min;
  }
  set tickMin(v) {
    this._payload.ticks.min = Number(v);
  }

  @api
  get tickMax() {
    return this._payload.ticks.max;
  }
  set tickMax(v) {
    this._payload.ticks.max = Number(v);
  }

  @api
  get tickMaxtickslimit() {
    return this._payload.ticks.maxTicksLimit;
  }
  set tickMaxtickslimit(v) {
    this._payload.ticks.maxTicksLimit = Number(v);
  }

  @api
  get tickPrecision() {
    return this._payload.ticks.precision;
  }
  set tickPrecision(v) {
    this._payload.ticks.precision = Number(v);
  }

  @api
  get tickStepsize() {
    return this._payload.ticks.stepSize;
  }
  set tickStepsize(v) {
    this._payload.ticks.stepSize = Number(v);
  }

  @api
  get tickSuggestedmax() {
    return this._payload.ticks.suggestedMax;
  }
  set tickSuggestedmax(v) {
    this._payload.ticks.suggestedMax = Number(v);
  }

  @api
  get tickSuggestedmin() {
    return this._payload.ticks.suggestedMin;
  }
  set tickSuggestedmin(v) {
    this._payload.ticks.suggestedMin = Number(v);
  }

  @api
  get tickShowlabelbackdrop() {
    return this._payload.ticks.showLabelBackdrop;
  }
  set tickShowlabelbackdrop(v) {
    this._payload.ticks.showLabelBackdrop = parseBoolean(v);
  }

  constructor() {
    super();
    this._payload.angleLines = this._reactivityManager.getReactivityProxy();
    this._payload.gridLines = this._reactivityManager.getReactivityProxy();
    this._payload.pointLabels = this._reactivityManager.getReactivityProxy();
    this._payload.ticks = this._reactivityManager.getReactivityProxy();
  }
}
