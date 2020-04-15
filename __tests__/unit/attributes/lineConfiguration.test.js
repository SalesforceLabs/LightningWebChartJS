import LineConfiguration from 'c/lineConfiguration';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('tension', 'foo', { line: { tension: 'foo' } }),
  new Handler.ChartOptionMock('backgroundcolor', 'foo', {
    line: { backgroundColor: 'foo' }
  }),
  new Handler.ChartOptionMock('borderwidth', 'foo', {
    line: { borderWidth: 'foo' }
  }),
  new Handler.ChartOptionMock('bordercolor', 'foo', {
    line: { borderColor: 'foo' }
  }),
  new Handler.ChartOptionMock('bordercapstyle', 'foo', {
    line: { borderCapStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('borderdash', 'foo', {
    line: { borderDash: 'foo' }
  }),
  new Handler.ChartOptionMock('borderdashoffset', 'foo', {
    line: { borderDashOffset: 'foo' }
  }),
  new Handler.ChartOptionMock('borderjoinstyle', 'foo', {
    line: { borderJoinStyle: 'foo' }
  }),
  new Handler.ChartOptionMock('capbezierpoints', 'foo', {
    line: { capBezierPoints: 'foo' }
  }),
  new Handler.ChartOptionMock('cubicinterpolationmode', 'foo', {
    line: { cubicInterpolationMode: 'foo' }
  }),
  new Handler.ChartOptionMock('fill', 'foo', { line: { fill: 'foo' } }),
  new Handler.ChartOptionMock('stepped', 'foo', { line: { stepped: 'foo' } }),
  new Handler.ChartOptionMock('spangaps', 'foo', { line: { spanGaps: 'foo' } })
];

describe('c-line-configuration', () => {
  Handler.testAttribute(LineConfiguration, TEST_DATA_PROPERTIES);
});
