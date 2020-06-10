import CartesianLinearAxis from 'c/cartesianLinearAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('tickBeginatzero', true, {
    yAxes: [{ ticks: { beginAtZero: true } }]
  }),
  ChartOptionMock('tickMaxtickslimit', 1, {
    yAxes: [{ ticks: { maxTicksLimit: 1 } }]
  }),
  ChartOptionMock('tickPrecision', 'foo', {
    yAxes: [{ ticks: { precision: 'foo' } }]
  }),
  ChartOptionMock('tickStepsize', 1, {
    yAxes: [{ ticks: { stepSize: 1 } }]
  }),
  ChartOptionMock('tickSuggestedmax', '1', {
    yAxes: [{ ticks: { suggestedMax: '1' } }]
  }),
  ChartOptionMock('tickSuggestedmin', '1', {
    yAxes: [{ ticks: { suggestedMin: '1' } }]
  })
];

describe('c-cartesian-linear-axis', () => {
  testAttribute(CartesianLinearAxis, TEST_DATA_PROPERTIES);
});
