import { DATA_EVENT_NAME } from 'c/constants';
import Data from 'c/data';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('backgroundcolor', 'foo', { backgroundColor: 'foo' }),
  ChartOptionMock('bordercapstyle', 'foo', { borderCapStyle: 'foo' }),
  ChartOptionMock('bordercolor', 'foo', { borderColor: 'foo' }),
  ChartOptionMock('borderdash', 'foo', { borderDash: 'foo' }),
  ChartOptionMock('borderdashoffset', 'foo', { borderDashOffset: 'foo' }),
  ChartOptionMock('borderjoinstyle', 'foo', { borderJoinStyle: 'foo' }),
  ChartOptionMock('borderwidth', 'foo', { borderWidth: 'foo' }),
  ChartOptionMock('hoverbackgroundcolor', 'foo', {
    hoverBackgroundColor: 'foo'
  }),
  ChartOptionMock('hoverbordercapstyle', 'foo', { hoverBorderCapStyle: 'foo' }),
  ChartOptionMock('hoverbordercolor', 'foo', { hoverBorderColor: 'foo' }),
  ChartOptionMock('hoverborderdash', 'foo', { hoverBorderDash: 'foo' }),
  ChartOptionMock('hoverborderdashoffset', 'foo', {
    hoverBorderDashOffset: 'foo'
  }),
  ChartOptionMock('hoverborderjoinstyle', 'foo', {
    hoverBorderJoinStyle: 'foo'
  }),
  ChartOptionMock('hoverborderwidth', 'foo', { hoverBorderWidth: 'foo' }),
  ChartOptionMock('fill', 'foo', { fill: 'foo' }),
  ChartOptionMock('label', 'foo', { label: 'foo' }),
  ChartOptionMock('order', 10, { order: 10 }),
  ChartOptionMock('linetension', 'foo', { lineTension: 'foo' }),
  ChartOptionMock('pointbackgroundcolor', 'foo', {
    pointBackgroundColor: 'foo'
  }),
  ChartOptionMock('pointbordercolor', 'foo', { pointBorderColor: 'foo' }),
  ChartOptionMock('pointborderwidth', 'foo', { pointBorderWidth: 'foo' }),
  ChartOptionMock('pointhitradius', 'foo', { pointHitRadius: 'foo' }),
  ChartOptionMock('pointhoverbackgroundcolor', 'foo', {
    pointHoverBackgroundColor: 'foo'
  }),
  ChartOptionMock('pointhoverbordercolor', 'foo', {
    pointHoverBorderColor: 'foo'
  }),
  ChartOptionMock('pointhoverborderwidth', 'foo', {
    pointHoverBorderWidth: 'foo'
  }),
  ChartOptionMock('pointhoverradius', 'foo', { pointHoverRadius: 'foo' }),
  ChartOptionMock('pointradius', 'foo', { pointRadius: 'foo' }),
  ChartOptionMock('pointrotation', 'foo', { pointRotation: 'foo' }),
  ChartOptionMock('pointstyle', 'foo', { pointStyle: 'foo' }),
  ChartOptionMock('spangaps', 'foo', { spanGaps: 'foo' }),
  ChartOptionMock('stack', '1', { stack: '1' }),
  ChartOptionMock('cubicinterpolationmode', 'foo', {
    cubicInterpolationMode: 'foo'
  }),
  ChartOptionMock('clip', 'foo', { clip: 'foo' }),
  ChartOptionMock('showline', 'foo', { showLine: 'foo' }),
  ChartOptionMock('steppedline', 'foo', { steppedLine: 'foo' }),
  ChartOptionMock('xaxisid', 'foo', { xAxisID: 'foo' }),
  ChartOptionMock('yaxisid', 'foo', { yAxisID: 'foo' }),
  ChartOptionMock('borderskipped', 'foo', { borderSkipped: 'foo' }),
  ChartOptionMock('borderalign', 'foo', { borderAlign: 'foo' }),
  ChartOptionMock('weight', 'foo', { weight: 'foo' }),
  ChartOptionMock('hoverradius', 'foo', { hoverRadius: 'foo' }),
  ChartOptionMock('hitradius', 'foo', { hitRadius: 'foo' }),
  ChartOptionMock('rotation', 'foo', { rotation: 'foo' }),
  ChartOptionMock('radius', 'foo', { radius: 'foo' }),
  ChartOptionMock('yaxisid', 'foo', { yAxisID: 'foo' }),
  ChartOptionMock('xaxisid', 'foo', { xAxisID: 'foo' }),
  ChartOptionMock('detail', 'foo', { data: 'foo' }),
  ChartOptionMock('type', 'foo', { type: 'foo' })
];

describe('c-data', () => {
  testAttribute(Data, TEST_DATA_PROPERTIES, DATA_EVENT_NAME);
});
