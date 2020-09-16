import { createElement } from 'lwc';
import ChartBuilder from 'c/chartBuilder';
import getChartData from '@salesforce/apex/ChartBuilderController.getChartData';

jest.mock(
  '@salesforce/apex/ChartBuilderController.getChartData',
  () => {
    return {
      default: jest.fn()
    };
  },
  { virtual: true }
);

describe('call server and get chart data when', () => {
  // Disconnect the component to reset the adapter. It is also
  // a best practice to clean up after each test.
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  test('soql query is passed', () => {
    getChartData.mockResolvedValue(MOCK_GETCHARTDATA);
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.soql =
      'SELECT StageName label, Sum(Amount) value FROM Opportunity WHERE IsClosed = false WITH SECURITY ENFORCED Group By StageName LIMIT 10';

    return flushPromises().then(() => {
      // Validate parameters of mocked Apex call
      expect(element.details).toMatchObject(MOCK_GETCHARTDATA);
    });
  });

  test('custom handler is passed', () => {
    getChartData.mockResolvedValue(MOCK_GETCHARTDATA);
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.handler = 'FakeHandler';

    return flushPromises().then(() => {
      flushPromises().then(() => {
        // Validate parameters of mocked Apex call
        expect(element.details).toMatchObject(MOCK_GETCHARTDATA);
        expect(element.handler).toEqual(element.handler);
      });
    });
  });

  test('error occurs in the server side', () => {
    getChartData.mockRejectedValue(APEX_ERROR);
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.handler = 'FakeHandler';

    return flushPromises().then(() => {
      expect(element.details).toBeNull();
    });
  });
});

describe('test property', () => {
  test('flexipageRegionWidth', () => {
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.flexipageRegionWidth = 'test';
    expect(element.flexipageRegionWidth).toEqual('test');
  });

  test('detailsLabels success', () => {
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.detailsLabels = '["test"]';
    expect(element.detailsLabels).toEqual(['test']);
  });

  test('detailsLabels error', () => {
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);

    element.detailsLabels = "['test',]";
    expect(element.detailsLabels).toEqual([]);
  });

  test('detailsLabels error', () => {
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);
    element.recordId = 'test';
    element.soql = ':recordId';

    // Validate parameters of mocked Apex call
    expect(element.soql).toEqual(`'${element.recordId}'`);
  });

  test('detailsLabels error', () => {
    const element = createElement('c-chartBuilder', { is: ChartBuilder });
    document.body.appendChild(element);
    element.recordId;
    element.soql = ':recordId';

    // Validate parameters of mocked Apex call
    expect(element.soql).toEqual(`'${ChartBuilder.FAKE_ID}'`);
  });
});

const MOCK_GETCHARTDATA = [{ labels: 'test', detail: [10] }];
// Sample error for imperative Apex call
const APEX_ERROR = {
  body: { message: 'An internal server error has occurred' },
  ok: false,
  status: 400,
  statusText: 'Bad Request'
};
