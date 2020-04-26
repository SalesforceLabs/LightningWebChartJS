import BaseAxis from 'c/baseAxis';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('display', true, { display: true }),
  ChartOptionMock('weight', 'foo', { weight: 'foo' }),
  ChartOptionMock('callbackBeforeupdate', 'foo', {
    callbacks: { beforeUpdate: 'foo' }
  }),
  ChartOptionMock('callbackBeforesetdimensions', 'foo', {
    callbacks: { beforeSetDimensions: 'foo' }
  }),
  ChartOptionMock('callbackAftersetdimensions', 'foo', {
    callbacks: { afterSetDimensions: 'foo' }
  }),
  ChartOptionMock('callbackBeforedatalimits', 'foo', {
    callbacks: { beforeDataLimits: 'foo' }
  }),
  ChartOptionMock('callbackAfterdatalimits', 'foo', {
    callbacks: { afterDataLimits: 'foo' }
  }),
  ChartOptionMock('callbackBeforebuildticks', 'foo', {
    callbacks: { beforeBuildTicks: 'foo' }
  }),
  ChartOptionMock('callbackAfterbuildticks', 'foo', {
    callbacks: { afterBuildTicks: 'foo' }
  }),
  ChartOptionMock('callbackBeforeticktolabelconversion', 'foo', {
    callbacks: { beforeTickToLabelConversion: 'foo' }
  }),
  ChartOptionMock('callbackAfterticktolabelconversion', 'foo', {
    callbacks: { afterTickToLabelConversion: 'foo' }
  }),
  ChartOptionMock('callbackBeforecalculatetickrotation', 'foo', {
    callbacks: { beforeCalculateTickRotation: 'foo' }
  }),
  ChartOptionMock('callbackAftercalculatetickrotation', 'foo', {
    callbacks: { afterCalculateTickRotation: 'foo' }
  }),
  ChartOptionMock('callbackBeforefit', 'foo', {
    callbacks: { beforeFit: 'foo' }
  }),
  ChartOptionMock('callbackAfterfit', 'foo', {
    callbacks: { afterFit: 'foo' }
  }),
  ChartOptionMock('callbackAfterupdate', 'foo', {
    callbacks: { afterUpdate: 'foo' }
  })
];

describe('c-base-axis', () => {
  testAttribute(BaseAxis, TEST_DATA_PROPERTIES);
});
