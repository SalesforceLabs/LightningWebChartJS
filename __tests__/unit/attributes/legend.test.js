import Legend from 'c/legend';
import {
  ChartOptionMock,
  testAttributeProperties
} from '../../__utils__/testAttributeHandler.js';

const TEST_DATA_PROPERTIES = [
  new ChartOptionMock('display', true, { display: true }),
  new ChartOptionMock('position', 'top', { position: 'top' }),
  new ChartOptionMock('labelBoxwidth', '35px', {
    labels: { boxWidth: '35px' }
  })
];

describe('c-legend', () => {
  testAttributeProperties(Legend, TEST_DATA_PROPERTIES);
});
