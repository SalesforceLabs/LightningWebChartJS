import Tooltip from 'c/tooltip';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('enabled', 'foo', { enabled: 'foo' }),
  new Handler.ChartOptionMock('custom', 'foo', { custom: 'foo' }),
  new Handler.ChartOptionMock('mode', 'foo', { mode: 'foo' }),
  new Handler.ChartOptionMock('intersect', 'foo', { intersect: 'foo' }),
  new Handler.ChartOptionMock('position', 'foo', { position: 'foo' }),
  new Handler.ChartOptionMock('callbackBeforetitle', 'foo', {
    callbacks: { beforeTitle: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackTitle', 'foo', {
    callbacks: { title: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackAftertitle', 'foo', {
    callbacks: { afterTitle: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackBeforebody', 'foo', {
    callbacks: { beforeBody: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackBeforelabel', 'foo', {
    callbacks: { beforeLabel: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackLabel', 'foo', {
    callbacks: { label: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackLabelcolor', 'foo', {
    callbacks: { labelColor: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackLabeltextcolor', 'foo', {
    callbacks: { labelTextColor: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackAfterlabel', 'foo', {
    callbacks: { afterLabel: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackAfterbody', 'foo', {
    callbacks: { afterBody: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackBeforefooter', 'foo', {
    callbacks: { beforeFooter: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackFooter', 'foo', {
    callbacks: { footer: 'foo' }
  }),
  new Handler.ChartOptionMock('callbackAfterfooter', 'foo', {
    callbacks: { afterFooter: 'foo' }
  }),
  new Handler.ChartOptionMock('itemsort', 'foo', { itemSort: 'foo' }),
  new Handler.ChartOptionMock('filter', 'foo', { filter: 'foo' }),
  new Handler.ChartOptionMock('backgroundcolor', 'foo', {
    backgroundColor: 'foo'
  }),
  new Handler.ChartOptionMock('titlefontfamily', 'foo', {
    titleFontFamily: 'foo'
  }),
  new Handler.ChartOptionMock('titlefontsize', 'foo', { titleFontSize: 'foo' }),
  new Handler.ChartOptionMock('titlefontstyle', 'foo', {
    titleFontStyle: 'foo'
  }),
  new Handler.ChartOptionMock('titlefontcolor', 'foo', {
    titleFontColor: 'foo'
  }),
  new Handler.ChartOptionMock('titlealign', 'foo', { titleAlign: 'foo' }),
  new Handler.ChartOptionMock('titlespacing', 'foo', { titleSpacing: 'foo' }),
  new Handler.ChartOptionMock('titlemarginbottom', 'foo', {
    titleMarginBottom: 'foo'
  }),
  new Handler.ChartOptionMock('bodyfontfamily', 'foo', {
    bodyFontFamily: 'foo'
  }),
  new Handler.ChartOptionMock('bodyfontsize', 'foo', { bodyFontSize: 'foo' }),
  new Handler.ChartOptionMock('bodyfontstyle', 'foo', { bodyFontStyle: 'foo' }),
  new Handler.ChartOptionMock('bodyfontcolor', 'foo', { bodyFontColor: 'foo' }),
  new Handler.ChartOptionMock('bodyalign', 'foo', { bodyAlign: 'foo' }),
  new Handler.ChartOptionMock('bodyspacing', 'foo', { bodySpacing: 'foo' }),
  new Handler.ChartOptionMock('footerfontfamily', 'foo', {
    footerFontFamily: 'foo'
  }),
  new Handler.ChartOptionMock('footerfontsize', 'foo', {
    footerFontSize: 'foo'
  }),
  new Handler.ChartOptionMock('footerfontstyle', 'foo', {
    footerFontStyle: 'foo'
  }),
  new Handler.ChartOptionMock('footerfontcolor', 'foo', {
    footerFontColor: 'foo'
  }),
  new Handler.ChartOptionMock('footeralign', 'foo', { footerAlign: 'foo' }),
  new Handler.ChartOptionMock('footerspacing', 'foo', { footerSpacing: 'foo' }),
  new Handler.ChartOptionMock('footermargintop', 'foo', {
    footerMarginTop: 'foo'
  }),
  new Handler.ChartOptionMock('xpadding', 'foo', { xPadding: 'foo' }),
  new Handler.ChartOptionMock('ypadding', 'foo', { yPadding: 'foo' }),
  new Handler.ChartOptionMock('caretpadding', 'foo', { caretPadding: 'foo' }),
  new Handler.ChartOptionMock('caretsize', 'foo', { caretSize: 'foo' }),
  new Handler.ChartOptionMock('cornerradius', 'foo', { cornerRadius: 'foo' }),
  new Handler.ChartOptionMock('multikeybackground', 'foo', {
    multiKeyBackground: 'foo'
  }),
  new Handler.ChartOptionMock('displaycolors', 'foo', { displayColors: 'foo' }),
  new Handler.ChartOptionMock('bordercolor', 'foo', { borderColor: 'foo' }),
  new Handler.ChartOptionMock('borderwidth', 'foo', { borderWidth: 'foo' }),
  new Handler.ChartOptionMock('rtl', 'foo', { rtl: 'foo' }),
  new Handler.ChartOptionMock('textdirection', 'foo', { textDirection: 'foo' })
];

describe('c-tooltip', () => {
  Handler.testAttribute(Tooltip, TEST_DATA_PROPERTIES);
});
