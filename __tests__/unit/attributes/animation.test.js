import Animation from 'c/animation';
import * as Handler from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('duration', 'foo', { duration: 'foo' }),
  new Handler.ChartOptionMock('easing', 'foo', { easing: 'foo' }),
  new Handler.ChartOptionMock('callbackOncomplete', 'foo', {
    onComplete: 'foo'
  }),
  new Handler.ChartOptionMock('callbackOnprogress', 'foo', {
    onProgress: 'foo'
  })
];

describe('c-animation', () => {
  Handler.testAttribute(Animation, TEST_DATA_PROPERTIES);
});
