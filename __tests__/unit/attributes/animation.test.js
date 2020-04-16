import Animation from 'c/animation';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('duration', 'foo', { duration: 'foo' }),
  ChartOptionMock('easing', 'foo', { easing: 'foo' }),
  ChartOptionMock('callbackOncomplete', 'foo', {
    onComplete: 'foo'
  }),
  ChartOptionMock('callbackOnprogress', 'foo', {
    onProgress: 'foo'
  })
];

describe('c-animation', () => {
  testAttribute(Animation, TEST_DATA_PROPERTIES);
});
