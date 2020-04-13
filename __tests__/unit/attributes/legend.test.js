import Legend from 'c/legend';
import * as Handler from '../../__utils__/testAttributeHandler.js';

// TODO: Missing attributes
const TEST_DATA_PROPERTIES = [
  new Handler.ChartOptionMock('display', true, { display: true }),
  new Handler.ChartOptionMock('position', 'top', { position: 'top' }),
  new Handler.ChartOptionMock('labelBoxwidth', '35px', {
    labels: { boxWidth: '35px' }
  })
];

describe('c-legend', () => {
  Handler.testAttribute(Legend, TEST_DATA_PROPERTIES);
});
