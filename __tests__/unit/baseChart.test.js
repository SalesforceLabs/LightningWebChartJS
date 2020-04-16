import { createElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';

import { BAR_CHART_TYPE, LINE_CHART_TYPE } from 'c/constants';

import BaseChart from 'c/baseChart';
import BarChart from 'c/barChart';
import LineChart from 'c/lineChart';

const STATIC_RESOURCE_NAME = 'chartjs_v280';

const CHARTS = [
  { class: BarChart, type: BAR_CHART_TYPE },
  { class: LineChart, type: LINE_CHART_TYPE }
  // TODO
];

describe('BaseChart: ChartJs library', () => {
  test('Load the ChartJS static resource', () => {
    const element = createElement('x-basechart', {
      is: BaseChart
    });
    document.body.appendChild(element);

    // Validation that the loadScript promise is called once.
    expect(loadScript.mock.calls.length).toBe(1);
    // Validation that the chartjs static resource is passed as parameter.
    expect(loadScript.mock.calls[0][1]).toEqual(STATIC_RESOURCE_NAME);
  });
});

// TODO: For each type of Chart: test that can be created, that contains canvas and that elements can be inserted
describe.each(CHARTS)('DOM Tests for individual charts', chart => {
  const chartName = chart.class.prototype.constructor.name;
  const element = createElement('x-chart', {
    is: chart.class
  });
  document.body.appendChild(element);

  describe('DOM Element created correctly', () => {
    test(`${chartName}`, () => {
      const queriedElement = element.shadowRoot.querySelector('x-chart');
      expect(queriedElement).toBeDefined();
    });
  });

  describe('Canvas exists', () => {
    test(`${chartName}`, () => {
      const queriedElement = element.shadowRoot.querySelector('canvas');
      expect(queriedElement).toBeDefined();
    });
  });

  describe('Chart type is correct', () => {
    test(`${chartName} is of type ${chart.type}`, () => {
      expect(chart.class.type).toBe(chart.type);
    });
  });

  describe('Chart accepts child-components', () => {
    test(`${chartName} Accepts attribute components`, () => {
      const attributeIdentifier = 'x-attribute';
      const attribute = createElement(attributeIdentifier, {
        is: TestAttribute
      });
      element.appendChild(attribute);

      const queriedElement = element.shadowRoot.querySelector(
        attributeIdentifier
      );
      expect(queriedElement).toBeDefined();
    });
  });
});

// TODO: checkOptions()

// TODO: Option event Listener & Disconnect Event Listener

// TODO: Create VS Update chart
