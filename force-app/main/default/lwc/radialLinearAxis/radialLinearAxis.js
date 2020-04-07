import RadialAxis from 'c/radialAxis';
import { api } from 'lwc';

/**
 * https://www.chartjs.org/docs/latest/axes/radial/linear.html
 */
export default class RadialLinearAxis extends RadialAxis {
  // AngleLines Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#angle-line-options

  @api
  get anglelinesDisplay() {
    return this._payload.angleLines.display;
  }
  set anglelinesDisplay(v) {
    this._payload.angleLines.display = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelinesColor() {
    return this._payload.angleLines.color;
  }
  set anglelinesColor(v) {
    this._payload.angleLines.color = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelinesLinewidth() {
    return this._payload.angleLines.lineWidth;
  }
  set anglelinesLinewidth(v) {
    this._payload.angleLines.lineWidth = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get anglelinesBorderdash() {
    return this._payload.angleLines.borderDash;
  }
  set anglelinesBorderdash(v) {
    this._payload.angleLines.borderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get anglelinesBorderdashoffset() {
    return this._payload.angleLines.borderDashOffset;
  }
  set anglelinesBorderdashoffset(v) {
    this._payload.angleLines.borderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  // GridLines Options: https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration

  @api
  get gridDisplay() {
    return this._payload.gridLines.display;
  }
  set gridDisplay(v) {
    this._payload.gridLines.display = v;
    this._mt.waitNextTask();
  }

  @api
  get gridCircular() {
    return this._payload.gridLines.circular;
  }
  set gridCircular(v) {
    this._payload.gridLines.circular = v;
    this._mt.waitNextTask();
  }

  @api
  get gridColor() {
    return this._payload.gridLines.color;
  }
  set gridColor(v) {
    this._payload.gridLines.color = v;
    this._mt.waitNextTask();
  }

  @api
  get gridBorderdash() {
    return this._payload.gridLines.borderDash;
  }
  set gridBorderdash(v) {
    this._payload.gridLines.borderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get gridBorderdashoffset() {
    return this._payload.gridLines.borderDashOffset;
  }
  set gridBorderdashoffset(v) {
    this._payload.gridLines.borderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridLinewidth() {
    return this._payload.gridLines.lineWidth;
  }
  set gridLinewidth(v) {
    this._payload.gridLines.lineWidth = v;
    this._mt.waitNextTask();
  }

  @api
  get gridDrawborder() {
    return this._payload.gridLines.drawBorder;
  }
  set gridDrawborder(v) {
    this._payload.gridLines.drawBorder = v;
    this._mt.waitNextTask();
  }

  @api
  get gridDrawonchartarea() {
    return this._payload.gridLines.drawOnChartArea;
  }
  set gridDrawonchartarea(v) {
    this._payload.gridLines.drawOnChartArea = v;
    this._mt.waitNextTask();
  }

  @api
  get gridDrawticks() {
    return this._payload.gridLines.drawTicks;
  }
  set gridDrawticks(v) {
    this._payload.gridLines.drawTicks = v;
    this._mt.waitNextTask();
  }

  @api
  get gridTickmarklength() {
    return this._payload.gridLines.tickMarkLength;
  }
  set gridTickmarklength(v) {
    this._payload.gridLines.tickMarkLength = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridZerolinewidth() {
    return this._payload.gridLines.zeroLineWidth;
  }
  set gridZerolinewidth(v) {
    this._payload.gridLines.zeroLineWidth = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridZerolinecolor() {
    return this._payload.gridLines.zeroLineColor;
  }
  set gridZerolinecolor(v) {
    this._payload.gridLines.zeroLineColor = v;
    this._mt.waitNextTask();
  }

  @api
  get gridZerolineborderdash() {
    return this._payload.gridLines.zeroLineBorderDash;
  }
  set gridZerolineborderdash(v) {
    this._payload.gridLines.zeroLineBorderDash = v;
    this._mt.waitNextTask();
  }

  @api
  get gridZerolineborderdashoffset() {
    return this._payload.gridLines.zeroLineBorderDashOffset;
  }
  set gridZerolineborderdashoffset(v) {
    this._payload.gridLines.zeroLineBorderDashOffset = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get gridOffsetGridLines() {
    return this._payload.gridLines.offsetGridLines;
  }
  set gridOffsetGridLines(v) {
    this._payload.gridLines.offsetGridLines = v;
    this._mt.waitNextTask();
  }

  @api
  get gridZ() {
    return this._payload.gridLines.z;
  }
  set gridZ(v) {
    this._payload.gridLines.z = Number(v);
    this._mt.waitNextTask();
  }

  // PointLabels Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#point-label-options

  @api
  get pointlabelsDisplay() {
    return this._payload.pointLabels.display;
  }
  set pointlabelsDisplay(v) {
    this._payload.pointLabels.display = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsCallback() {
    return this._payload.pointLabels.callback;
  }
  set pointlabelsCallback(v) {
    this._payload.pointLabels.callback = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsFontcolor() {
    return this._payload.pointLabels.fontColor;
  }
  set pointlabelsFontcolor(v) {
    this._payload.pointLabels.fontColor = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsFontfamily() {
    return this._payload.pointLabels.fontFamily;
  }
  set pointlabelsFontfamily(v) {
    this._payload.pointLabels.fontFamily = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsFontsize() {
    return this._payload.pointLabels.fontSize;
  }
  set pointlabelsFontsize(v) {
    this._payload.pointLabels.fontSize = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsFontstyle() {
    return this._payload.pointLabels.fontStyle;
  }
  set pointlabelsFontstyle(v) {
    this._payload.pointLabels.fontStyle = v;
    this._mt.waitNextTask();
  }

  @api
  get pointlabelsLineheight() {
    return this._payload.pointLabels.lineHeight;
  }
  set pointlabelsLineheight(v) {
    this._payload.pointLabels.lineHeight = v;
    this._mt.waitNextTask();
  }

  // Ticks Options: https://www.chartjs.org/docs/latest/axes/radial/linear.html#tick-options

  @api
  get ticksBackdropcolor() {
    return this._payload.ticks.backdropColor;
  }
  set ticksBackdropcolor(v) {
    this._payload.ticks.backdropColor = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksBackdroppaddingx() {
    return this._payload.ticks.backdropPaddingX;
  }
  set ticksBackdroppaddingx(v) {
    this._payload.ticks.backdropPaddingX = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get ticksBackdroppaddingy() {
    return this._payload.ticks.backdropPaddingY;
  }
  set ticksBackdroppaddingy(v) {
    this._payload.ticks.backdropPaddingY = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get ticksBeginatzero() {
    return this._payload.ticks.beginAtZero;
  }
  set ticksBeginatzero(v) {
    this._payload.ticks.beginAtZero = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksMin() {
    return this._payload.ticks.min;
  }
  set ticksMin(v) {
    this._payload.ticks.min = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksMax() {
    return this._payload.ticks.max;
  }
  set ticksMax(v) {
    this._payload.ticks.max = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksMaxtickslimit() {
    return this._payload.ticks.maxTicksLimit;
  }
  set ticksMaxtickslimit(v) {
    this._payload.ticks.maxTicksLimit = Number(v);
    this._mt.waitNextTask();
  }

  @api
  get ticksPrecision() {
    return this._payload.ticks.precision;
  }
  set ticksPrecision(v) {
    this._payload.ticks.precision = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksStepsize() {
    return this._payload.ticks.stepSize;
  }
  set ticksStepsize(v) {
    this._payload.ticks.stepSize = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksSuggestedmax() {
    return this._payload.ticks.suggestedMax;
  }
  set ticksSuggestedmax(v) {
    this._payload.ticks.suggestedMax = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksSuggestedmin() {
    return this._payload.ticks.suggestedMin;
  }
  set ticksSuggestedmin(v) {
    this._payload.ticks.suggestedMin = v;
    this._mt.waitNextTask();
  }

  @api
  get ticksShowlabelbackdrop() {
    return this._payload.ticks.showLabelBackdrop;
  }
  set ticksShowlabelbackdrop(v) {
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
