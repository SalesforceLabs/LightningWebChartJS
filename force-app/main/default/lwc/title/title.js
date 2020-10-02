import BaseAttribute from 'c/baseAttribute';
import { api } from 'lwc';
import { ATTRIBUTE_TITLE } from 'c/constants';
import { parseBoolean } from 'c/utils';

export default class Title extends BaseAttribute {
  @api
  get display() {
    return this._payload.display;
  }
  set display(v) {
    this._payload.display = parseBoolean(v);
  }

  @api
  get position() {
    return this._payload.position;
  }
  set position(v) {
    this._payload.position = v;
  }

  @api
  get fontsize() {
    return this._payload.fontSize;
  }
  set fontsize(v) {
    this._payload.fontSize = v;
  }

  @api
  get fontfamily() {
    return this._payload.fontFamily;
  }
  set fontfamily(v) {
    this._payload.fontFamily = v;
  }

  @api
  get fontcolor() {
    return this._payload.fontColor;
  }
  set fontcolor(v) {
    this._payload.fontColor = v;
  }

  @api
  get fontstyle() {
    return this._payload.fontStyle;
  }
  set fontstyle(v) {
    this._payload.fontStyle = v;
  }

  @api
  get padding() {
    return this._payload.padding;
  }
  set padding(v) {
    this._payload.padding = v;
  }

  @api
  get lineheight() {
    return this._payload.lineHeight;
  }
  set lineheight(v) {
    this._payload.lineHeight = v;
  }

  @api
  get text() {
    return this._payload.text;
  }
  set text(v) {
    this._payload.text = v;
  }

  constructor() {
    super();
    this._payload.display = true;
    this._option = ATTRIBUTE_TITLE;
  }
}
