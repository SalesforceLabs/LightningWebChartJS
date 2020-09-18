import CartesianLinearAxis from 'c/cartesianLinearAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('ticksBeginatzero', true, {
    yAxes: [{ ticks: { beginAtZero: true } }]
  }),
  ChartOptionMock('ticksMaxtickslimit', 1, {
    yAxes: [{ ticks: { maxTicksLimit: 1 } }]
  }),
  ChartOptionMock('ticksPrecision', 'foo', {
    yAxes: [{ ticks: { precision: 'foo' } }]
  }),
  ChartOptionMock('ticksStepsize', 1, {
    yAxes: [{ ticks: { stepSize: 1 } }]
  }),
  ChartOptionMock('ticksSuggestedmax', '1', {
    yAxes: [{ ticks: { suggestedMax: '1' } }]
  }),
  ChartOptionMock('ticksSuggestedmin', '1', {
    yAxes: [{ ticks: { suggestedMin: '1' } }]
  })
];

describe('c-cartesian-linear-axis', () => {
  testAttribute(CartesianLinearAxis, TEST_DATA_PROPERTIES);
});
