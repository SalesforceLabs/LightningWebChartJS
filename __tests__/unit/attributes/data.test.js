import { DATA_EVENT_NAME } from 'c/constants';
import Data from 'c/data';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('label', 'foo', { label: 'foo' }),
  ChartOptionMock('yaxisid', 'foo', { yAxisID: 'foo' }),
  ChartOptionMock('xaxisid', 'foo', { xAxisID: 'foo' }),
  ChartOptionMock('detail', 10, { data: 10 }),
  ChartOptionMock('backgroundcolor', 'red', {
    backgroundColor: 'red'
  }),
  ChartOptionMock('bordercolor', 'red', { borderColor: 'red' }),
  ChartOptionMock('borderwidth', 'foo', { borderWidth: 'foo' }),
  ChartOptionMock('fill', 'foo', { fill: 'foo' }),
  ChartOptionMock('order', 1, { order: 1 }),
  ChartOptionMock('type', 'foo', { type: 'foo' }),
  ChartOptionMock('pointhoverbackgroundcolor', 'foo', {
    pointHoverBackgroundColor: 'foo'
  }),
  ChartOptionMock('pointhoverbordercolor', 'foo', {
    pointHoverBorderColor: 'foo'
  }),
  ChartOptionMock('pointhoverborderwidth', 'foo', {
    pointHoverBorderWidth: 'foo'
  }),
  ChartOptionMock('pointhoverradius', 'foo', {
    pointHoverRadius: 'foo'
  })
];

describe('c-data', () => {
  testAttribute(Data, TEST_DATA_PROPERTIES, DATA_EVENT_NAME);
});
