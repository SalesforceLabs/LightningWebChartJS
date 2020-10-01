import LineConfiguration from 'c/lineConfiguration';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('tension', 'foo', { line: { tension: 'foo' } }),
  ChartOptionMock('backgroundcolor', 'foo', {
    line: { backgroundColor: 'foo' }
  }),
  ChartOptionMock('borderwidth', 'foo', {
    line: { borderWidth: 'foo' }
  }),
  ChartOptionMock('bordercolor', 'foo', {
    line: { borderColor: 'foo' }
  }),
  ChartOptionMock('bordercapstyle', 'foo', {
    line: { borderCapStyle: 'foo' }
  }),
  ChartOptionMock('borderdash', 'foo', {
    line: { borderDash: 'foo' }
  }),
  ChartOptionMock('borderdashoffset', 'foo', {
    line: { borderDashOffset: 'foo' }
  }),
  ChartOptionMock('borderjoinstyle', 'foo', {
    line: { borderJoinStyle: 'foo' }
  }),
  ChartOptionMock('capbezierpoints', true, {
    line: { capBezierPoints: true }
  }),
  ChartOptionMock('cubicinterpolationmode', 'foo', {
    line: { cubicInterpolationMode: 'foo' }
  }),
  ChartOptionMock('fill', true, { line: { fill: true } }),
  ChartOptionMock('stepped', true, { line: { stepped: true } }),
  ChartOptionMock('spangaps', true, { line: { spanGaps: true } })
];

describe('c-line-configuration', () => {
  testAttribute(LineConfiguration, TEST_DATA_PROPERTIES);
});
