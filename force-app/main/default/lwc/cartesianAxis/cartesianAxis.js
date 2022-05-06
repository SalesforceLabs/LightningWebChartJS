import BaseAxis from 'c/baseAxis';
import { api } from 'lwc';
import { ATTRIBUTE_CARTESIAN_AXES } from 'c/constants';
import { nanoid } from 'c/nanoid';
import { parseBoolean } from 'c/utils';

/**
 * https://www.chartjs.org/docs/latest/axes/cartesian/
 *
 * NOTES:
 *      Cartesian axes are available only for Line, Bar and Bubble charts
 *      Multipe X and/or Y cartesian axes can be defined
 */
export default class CartesianAxis extends BaseAxis {
  @api
  get axis() {
    return this._axis === 'yAxes' ? 'y' : this._axis === 'xAxes' ? 'x' : null;
  }
  set axis(v) {
    if (this._axis[0] === v) {
      return;
    }
    this._axis = v === 'y' ? 'yAxes' : v === 'x' ? 'xAxes' : null;
    const otherAxe = v === 'y' ? 'xAxes' : v === 'x' ? 'yAxes' : null;
    if (otherAxe) {
      this._payload[this._axis] = this._payload[otherAxe] || [{}];
      this._content = this._payload[this._axis][0];
      this._payload[otherAxe] = undefined;
    }
  }

  @api
  get type() {
    return this._content.type;
  }
  set type(v) {
    this._content.type = v;
  }

  @api
  get position() {
    return this._content.position;
  }
  set position(v) {
    this._content.position = v;
  }

  @api
  get offset() {
    return this._content.offset;
  }
  set offset(v) {
    this._content.offset = parseBoolean(v);
  }

  /**
   * @deprecated Property replaced by axisid
   */
  @api
  get id() {
    return this._content.id;
  }
  set id(v) {
    // Do nothing
  }

  @api
  get axisid() {
    return this._content.id;
  }
  set axisid(v) {
    this._content.id = v;
  }

  // Ticks Configuration: https://www.chartjs.org/docs/latest/axes/cartesian/#tick-configuration
  @api
  get ticksMin() {
    return this._content.ticks.min;
  }
  set ticksMin(v) {
    this._content.ticks.min = Number(v);
  }

  @api
  get ticksMax() {
    return this._content.ticks.max;
  }
  set ticksMax(v) {
    this._content.ticks.max = Number(v);
  }

  @api
  get ticksSamplesize() {
    return this._content.ticks.sampleSize;
  }
  set ticksSamplesize(v) {
    this._content.ticks.sampleSize = Number(v);
  }

  @api
  get ticksAutoskip() {
    return this._content.ticks.autoSkip;
  }
  set ticksAutoskip(v) {
    this._content.ticks.autoSkip = parseBoolean(v);
  }

  @api
  get ticksAutoskippadding() {
    return this._content.ticks.autoSkipPadding;
  }
  set ticksAutoskippadding(v) {
    this._content.ticks.autoSkipPadding = Number(v);
  }

  @api
  get ticksLabeloffset() {
    return this._content.ticks.labelOffset;
  }
  set ticksLabeloffset(v) {
    this._content.ticks.labelOffset = Number(v);
  }

  @api
  get ticksMaxrotation() {
    return this._content.ticks.maxRotation;
  }
  set ticksMaxrotation(v) {
    this._content.ticks.maxRotation = Number(v);
  }

  @api
  get ticksMinrotation() {
    return this._content.ticks.minRotation;
  }
  set ticksMinrotation(v) {
    this._content.ticks.minRotation = Number(v);
  }

  @api
  get ticksMirror() {
    return this._content.ticks.mirror;
  }
  set ticksMirror(v) {
    this._content.ticks.mirror = parseBoolean(v);
  }

  @api
  get ticksPadding() {
    return this._content.ticks.padding;
  }
  set ticksPadding(v) {
    this._content.ticks.padding = Number(v);
  }

  // ScaleTitle Configuration: https://www.chartjs.org/docs/latest/axes/labelling.html#scale-title-configuration

  @api
  get titleDisplay() {
    return this._content.scaleLabel.display;
  }
  set titleDisplay(v) {
    this._content.scaleLabel.display = parseBoolean(v);
  }

  @api
  get titleLabelstring() {
    return this._content.scaleLabel.labelString;
  }
  set titleLabelstring(v) {
    this._content.scaleLabel.labelString = v;
  }

  @api
  get titleLineheight() {
    return this._content.scaleLabel.lineHeight;
  }
  set titleLineheight(v) {
    this._content.scaleLabel.lineHeight = v;
  }

  @api
  get titleFontcolor() {
    return this._content.scaleLabel.fontColor;
  }
  set titleFontcolor(v) {
    this._content.scaleLabel.fontColor = v;
  }

  @api
  get titleFontfamily() {
    return this._content.scaleLabel.fontFamily;
  }
  set titleFontfamily(v) {
    this._content.scaleLabel.fontFamily = v;
  }

  @api
  get titleFontsize() {
    return this._content.scaleLabel.fontSize;
  }
  set titleFontsize(v) {
    this._content.scaleLabel.fontSize = Number(v);
  }

  @api
  get titleFontstyle() {
    return this._content.scaleLabel.fontStyle;
  }
  set titleFontstyle(v) {
    this._content.scaleLabel.fontStyle = v;
  }

  @api
  get titlePadding() {
    return this._content.scaleLabel.padding;
  }
  set titlePadding(v) {
    this._content.scaleLabel.padding = v;
  }

  // GridLines Configuration: https://www.chartjs.org/docs/latest/axes/styling.html#grid-line-configuration

  @api
  get gridDisplay() {
    return this._content.gridLines.display;
  }
  set gridDisplay(v) {
    this._content.gridLines.display = parseBoolean(v);
  }

  @api
  get gridCircular() {
    return this._content.gridLines.circular;
  }
  set gridCircular(v) {
    this._content.gridLines.circular = parseBoolean(v);
  }

  @api
  get gridColor() {
    return this._content.gridLines.color;
  }
  set gridColor(v) {
    this._content.gridLines.color = v;
  }

  @api
  get gridBorderdash() {
    return this._content.gridLines.borderDash;
  }
  set gridBorderdash(v) {
    this._content.gridLines.borderDash = v;
  }

  @api
  get gridBorderdashoffset() {
    return this._content.gridLines.borderDashOffset;
  }
  set gridBorderdashoffset(v) {
    this._content.gridLines.borderDashOffset = Number(v);
  }

  @api
  get gridLinewidth() {
    return this._content.gridLines.lineWidth;
  }
  set gridLinewidth(v) {
    this._content.gridLines.lineWidth = v;
  }

  @api
  get gridDrawborder() {
    return this._content.gridLines.drawBorder;
  }
  set gridDrawborder(v) {
    this._content.gridLines.drawBorder = parseBoolean(v);
  }

  @api
  get gridDrawonchartarea() {
    return this._content.gridLines.drawOnChartArea;
  }
  set gridDrawonchartarea(v) {
    this._content.gridLines.drawOnChartArea = parseBoolean(v);
  }

  @api
  get gridDrawticks() {
    return this._content.gridLines.drawTicks;
  }
  set gridDrawticks(v) {
    this._content.gridLines.drawTicks = parseBoolean(v);
  }

  @api
  get gridTickmarklength() {
    return this._content.gridLines.tickMarkLength;
  }
  set gridTickmarklength(v) {
    this._content.gridLines.tickMarkLength = Number(v);
  }

  @api
  get gridZerolinewidth() {
    return this._content.gridLines.zeroLineWidth;
  }
  set gridZerolinewidth(v) {
    this._content.gridLines.zeroLineWidth = Number(v);
  }

  @api
  get gridZerolinecolor() {
    return this._content.gridLines.zeroLineColor;
  }
  set gridZerolinecolor(v) {
    this._content.gridLines.zeroLineColor = v;
  }

  @api
  get gridZerolineborderdash() {
    return this._content.gridLines.zeroLineBorderDash;
  }
  set gridZerolineborderdash(v) {
    this._content.gridLines.zeroLineBorderDash = v;
  }

  @api
  get gridZerolineborderdashoffset() {
    return this._content.gridLines.zeroLineBorderDashOffset;
  }
  set gridZerolineborderdashoffset(v) {
    this._content.gridLines.zeroLineBorderDashOffset = Number(v);
  }

  @api
  get gridOffsetgridlines() {
    return this._content.gridLines.offsetGridLines;
  }
  set gridOffsetgridlines(v) {
    this._content.gridLines.offsetGridLines = parseBoolean(v);
  }

  @api
  get gridZ() {
    return this._content.gridLines.z;
  }
  set gridZ(v) {
    this._content.gridLines.z = Number(v);
  }

  @api
  get stacked() {
    return this._content.stacked;
  }
  set stacked(v) {
    this._content.stacked = parseBoolean(v);
  }

  constructor() {
    super();
    this._axis = 'yAxes';
    this._payload[this._axis] = [{}];
    this._content = this._payload[this._axis][0];
    this._content.uuid = nanoid(10);
    this._content.gridLines = this._reactivityManager.getReactivityProxy();
    this._content.scaleLabel = this._reactivityManager.getReactivityProxy();
    this._content.ticks = this._reactivityManager.getReactivityProxy();
    this._option = ATTRIBUTE_CARTESIAN_AXES;
  }
}
