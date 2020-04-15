import { DATA_EVENT_NAME } from 'c/constants';
import Data from 'c/data';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('label', 'foo', { label: 'foo' }),
  new Handler.ChartOptionMock('yaxisid', 'foo', { yAxisID: 'foo' }),
  new Handler.ChartOptionMock('xaxisid', 'foo', { xAxisID: 'foo' }),
  new Handler.ChartOptionMock('detail', 10, { data: 10 }),
  new Handler.ChartOptionMock('backgroundcolor', 'red', {
    backgroundColor: 'red'
  }),
  new Handler.ChartOptionMock('bordercolor', 'red', { borderColor: 'red' }),
  new Handler.ChartOptionMock('borderwidth', 'foo', { borderWidth: 'foo' }),
  new Handler.ChartOptionMock('fill', 'foo', { fill: 'foo' }),
  new Handler.ChartOptionMock('order', 1, { order: 1 }),
  new Handler.ChartOptionMock('type', 'foo', { type: 'foo' }),
  new Handler.ChartOptionMock('pointhoverbackgroundcolor', 'foo', {
    pointHoverBackgroundColor: 'foo'
  }),
  new Handler.ChartOptionMock('pointhoverbordercolor', 'foo', {
    pointHoverBorderColor: 'foo'
  }),
  new Handler.ChartOptionMock('pointhoverborderwidth', 'foo', {
    pointHoverBorderWidth: 'foo'
  }),
  new Handler.ChartOptionMock('pointhoverradius', 'foo', {
    pointHoverRadius: 'foo'
  })
];

describe('c-data', () => {
  Handler.testAttribute(Data, TEST_DATA_PROPERTIES, DATA_EVENT_NAME);
});
