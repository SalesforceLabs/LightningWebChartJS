import CartesianTimeAxis from 'c/cartesianTimeAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('adapterDate', 'foo', {
    yAxes: [{ adapters: { date: 'foo' } }]
  }),
  ChartOptionMock('distribution', 'foo', {
    yAxes: [{ distribution: 'foo' }]
  }),
  ChartOptionMock('bounds', 'foo', { yAxes: [{ bounds: 'foo' }] }),
  ChartOptionMock('tickSource', 'foo', {
    yAxes: [{ ticks: { source: 'foo' } }]
  }),
  ChartOptionMock('timeDisplayformats', 'foo', {
    yAxes: [{ time: { displayFormats: 'foo' } }]
  }),
  ChartOptionMock('timeIsoweekday', true, {
    yAxes: [{ time: { isoWeekday: true } }]
  }),
  ChartOptionMock('timeParser', 'foo', {
    yAxes: [{ time: { parser: 'foo' } }]
  }),
  ChartOptionMock('timeRound', 'foo', {
    yAxes: [{ time: { round: 'foo' } }]
  }),
  ChartOptionMock('timeTooltipformat', 'foo', {
    yAxes: [{ time: { tooltipFormat: 'foo' } }]
  }),
  ChartOptionMock('timeUnit', '1', {
    yAxes: [{ time: { unit: '1' } }]
  }),
  ChartOptionMock('timeStepsize', 1, {
    yAxes: [{ time: { stepSize: 1 } }]
  }),
  ChartOptionMock('timeMinunit', '1', {
    yAxes: [{ time: { minUnit: '1' } }]
  })
];

describe('c-cartesian-time-axis', () => {
  testAttribute(CartesianTimeAxis, TEST_DATA_PROPERTIES);
});
