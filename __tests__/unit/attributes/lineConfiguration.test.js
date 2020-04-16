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
  ChartOptionMock('capbezierpoints', 'foo', {
    line: { capBezierPoints: 'foo' }
  }),
  ChartOptionMock('cubicinterpolationmode', 'foo', {
    line: { cubicInterpolationMode: 'foo' }
  }),
  ChartOptionMock('fill', 'foo', { line: { fill: 'foo' } }),
  ChartOptionMock('stepped', 'foo', { line: { stepped: 'foo' } }),
  ChartOptionMock('spangaps', 'foo', { line: { spanGaps: 'foo' } })
];

describe('c-line-configuration', () => {
  testAttribute(LineConfiguration, TEST_DATA_PROPERTIES);
});
