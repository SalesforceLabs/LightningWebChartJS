import CartesianLinearAxis from 'c/cartesianLinearAxis';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('ticksBeginatzero', true, {
    yAxes: [{ ticks: { beginAtZero: true } }]
  }),
  new Handler.ChartOptionMock('ticksMaxtickslimit', 1, {
    yAxes: [{ ticks: { maxTicksLimit: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksPrecision', 'foo', {
    yAxes: [{ ticks: { precision: 'foo' } }]
  }),
  new Handler.ChartOptionMock('ticksStepsize', 1, {
    yAxes: [{ ticks: { stepSize: 1 } }]
  }),
  new Handler.ChartOptionMock('ticksSuggestedmax', '1', {
    yAxes: [{ ticks: { suggestedMax: '1' } }]
  }),
  new Handler.ChartOptionMock('ticksSuggestedmin', '1', {
    yAxes: [{ ticks: { suggestedMin: '1' } }]
  })
];

describe('c-cartesian-linear-axis', () => {
  Handler.testAttribute(CartesianLinearAxis, TEST_DATA_PROPERTIES);
});
