import Tooltip from 'c/tooltip';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('enabled', true, { enabled: true }),
  ChartOptionMock('custom', 'foo', { custom: 'foo' }),
  ChartOptionMock('mode', 'foo', { mode: 'foo' }),
  ChartOptionMock('intersect', true, { intersect: true }),
  ChartOptionMock('position', 'foo', { position: 'foo' }),
  ChartOptionMock('callbackBeforetitle', 'foo', {
    callbacks: { beforeTitle: 'foo' }
  }),
  ChartOptionMock('callbackTitle', 'foo', {
    callbacks: { title: 'foo' }
  }),
  ChartOptionMock('callbackAftertitle', 'foo', {
    callbacks: { afterTitle: 'foo' }
  }),
  ChartOptionMock('callbackBeforebody', 'foo', {
    callbacks: { beforeBody: 'foo' }
  }),
  ChartOptionMock('callbackBeforelabel', 'foo', {
    callbacks: { beforeLabel: 'foo' }
  }),
  ChartOptionMock('callbackLabel', 'foo', {
    callbacks: { label: 'foo' }
  }),
  ChartOptionMock('callbackLabelcolor', 'foo', {
    callbacks: { labelColor: 'foo' }
  }),
  ChartOptionMock('callbackLabeltextcolor', 'foo', {
    callbacks: { labelTextColor: 'foo' }
  }),
  ChartOptionMock('callbackAfterlabel', 'foo', {
    callbacks: { afterLabel: 'foo' }
  }),
  ChartOptionMock('callbackAfterbody', 'foo', {
    callbacks: { afterBody: 'foo' }
  }),
  ChartOptionMock('callbackBeforefooter', 'foo', {
    callbacks: { beforeFooter: 'foo' }
  }),
  ChartOptionMock('callbackFooter', 'foo', {
    callbacks: { footer: 'foo' }
  }),
  ChartOptionMock('callbackAfterfooter', 'foo', {
    callbacks: { afterFooter: 'foo' }
  }),
  ChartOptionMock('itemsort', 'foo', { itemSort: 'foo' }),
  ChartOptionMock('filter', 'foo', { filter: 'foo' }),
  ChartOptionMock('backgroundcolor', 'foo', {
    backgroundColor: 'foo'
  }),
  ChartOptionMock('titlefontfamily', 'foo', {
    titleFontFamily: 'foo'
  }),
  ChartOptionMock('titlefontsize', 'foo', { titleFontSize: 'foo' }),
  ChartOptionMock('titlefontstyle', 'foo', {
    titleFontStyle: 'foo'
  }),
  ChartOptionMock('titlefontcolor', 'foo', {
    titleFontColor: 'foo'
  }),
  ChartOptionMock('titlealign', 'foo', { titleAlign: 'foo' }),
  ChartOptionMock('titlespacing', 'foo', { titleSpacing: 'foo' }),
  ChartOptionMock('titlemarginbottom', 'foo', {
    titleMarginBottom: 'foo'
  }),
  ChartOptionMock('bodyfontfamily', 'foo', {
    bodyFontFamily: 'foo'
  }),
  ChartOptionMock('bodyfontsize', 'foo', { bodyFontSize: 'foo' }),
  ChartOptionMock('bodyfontstyle', 'foo', { bodyFontStyle: 'foo' }),
  ChartOptionMock('bodyfontcolor', 'foo', { bodyFontColor: 'foo' }),
  ChartOptionMock('bodyalign', 'foo', { bodyAlign: 'foo' }),
  ChartOptionMock('bodyspacing', 'foo', { bodySpacing: 'foo' }),
  ChartOptionMock('footerfontfamily', 'foo', {
    footerFontFamily: 'foo'
  }),
  ChartOptionMock('footerfontsize', 'foo', {
    footerFontSize: 'foo'
  }),
  ChartOptionMock('footerfontstyle', 'foo', {
    footerFontStyle: 'foo'
  }),
  ChartOptionMock('footerfontcolor', 'foo', {
    footerFontColor: 'foo'
  }),
  ChartOptionMock('footeralign', 'foo', { footerAlign: 'foo' }),
  ChartOptionMock('footerspacing', 'foo', { footerSpacing: 'foo' }),
  ChartOptionMock('footermargintop', 'foo', {
    footerMarginTop: 'foo'
  }),
  ChartOptionMock('xpadding', 'foo', { xPadding: 'foo' }),
  ChartOptionMock('ypadding', 'foo', { yPadding: 'foo' }),
  ChartOptionMock('caretpadding', 'foo', { caretPadding: 'foo' }),
  ChartOptionMock('caretsize', 'foo', { caretSize: 'foo' }),
  ChartOptionMock('cornerradius', 'foo', { cornerRadius: 'foo' }),
  ChartOptionMock('multikeybackground', 'foo', {
    multiKeyBackground: 'foo'
  }),
  ChartOptionMock('displaycolors', true, { displayColors: true }),
  ChartOptionMock('bordercolor', 'foo', { borderColor: 'foo' }),
  ChartOptionMock('borderwidth', 'foo', { borderWidth: 'foo' }),
  ChartOptionMock('rtl', true, { rtl: true }),
  ChartOptionMock('textdirection', 'foo', { textDirection: 'foo' })
];

describe('c-tooltip', () => {
  testAttribute(Tooltip, TEST_DATA_PROPERTIES);
});
