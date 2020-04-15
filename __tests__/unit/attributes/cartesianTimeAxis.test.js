import CartesianTimeAxis from 'c/cartesianTimeAxis';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('adapterDate', 'foo', {
    yAxes: [{ adapters: { date: 'foo' } }]
  }),
  new Handler.ChartOptionMock('distribution', 'foo', {
    yAxes: [{ distribution: 'foo' }]
  }),
  new Handler.ChartOptionMock('bounds', 'foo', { yAxes: [{ bounds: 'foo' }] }),
  new Handler.ChartOptionMock('tickSource', 'foo', {
    yAxes: [{ ticks: { source: 'foo' } }]
  }),
  new Handler.ChartOptionMock('timeDisplayformats', 'foo', {
    yAxes: [{ time: { displayFormats: 'foo' } }]
  }),
  new Handler.ChartOptionMock('timeIsoweekday', true, {
    yAxes: [{ time: { isoWeekday: true } }]
  }),
  new Handler.ChartOptionMock('timeParser', 'foo', {
    yAxes: [{ time: { parser: 'foo' } }]
  }),
  new Handler.ChartOptionMock('timeRound', 'foo', {
    yAxes: [{ time: { round: 'foo' } }]
  }),
  new Handler.ChartOptionMock('timeTooltipformat', 'foo', {
    yAxes: [{ time: { tooltipFormat: 'foo' } }]
  }),
  new Handler.ChartOptionMock('timeUnit', '1', {
    yAxes: [{ time: { unit: '1' } }]
  }),
  new Handler.ChartOptionMock('timeStepsize', 1, {
    yAxes: [{ time: { stepSize: 1 } }]
  }),
  new Handler.ChartOptionMock('timeMinunit', '1', {
    yAxes: [{ time: { minUnit: '1' } }]
  })
];

describe('c-cartesian-time-axis', () => {
  Handler.testAttribute(CartesianTimeAxis, TEST_DATA_PROPERTIES);
});
