import { createElement } from 'lwc';
//import { loadScript } from 'lightning/platformResourceLoader';

import { BAR_CHART_TYPE, LINE_CHART_TYPE } from 'c/constants';

import Chart from 'c/chart';
import DataSet from 'c/dataset';
import Data from 'c/data';
import Title from 'c/title';
import Legend from 'c/legend';
const STATIC_RESOURCE_NAME = 'chartjs_v280';

let mockScriptSuccess = true;
const flushPromises = () => {
  // eslint-disable-next-line no-undef
  return new Promise(resolve => setImmediate(resolve));
};

jest.mock(
  'lightning/platformResourceLoader',
  () => {
    return {
      loadScript() {
        return new Promise((resolve, reject) => {
          // If the variable is false we're simulating an error when loading
          // the script resource.
          if (!mockScriptSuccess) {
            reject('Could not load script');
          } else {
            global.window = {};
            global.window.Chart = require(`../../force-app/main/default/staticresources/chartjs_v280.js`);
            resolve();
          }
        });
      }
    };
  },
  { virtual: true }
);

const CHARTS = [
  { class: Chart, type: BAR_CHART_TYPE },
  { class: Chart, type: LINE_CHART_TYPE }
  // TODO other type
];

describe('Chart: ChartJs library', () => {
  test('Load the ChartJS static resource', () => {
    const element = createElement('x-chart', {
      is: Chart
    });
    element.type = LINE_CHART_TYPE;
    document.body.appendChild(element);
    Promise.resolve().then(() => {
      expect(element.uuid).toBeDefined();
      document.body.removeChild(element);
    });
  });
});

// TODO: For each type of Chart: test that can be created, that contains canvas and that elements can be inserted
describe.each(CHARTS)('DOM Tests for individual charts', chart => {
  const chartName = chart.class.prototype.constructor.name;
  const element = createElement('x-chart', {
    is: chart.class
  });
  element.setAttribute('type', chart.type);
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
      expect(chart.class.type).toBe(element.type);
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

const TEST_DATA_PROPERTIES = [
  //ChartOptionMock('uuid', 10, { uuid: 10 }),
  ChartOptionMock('responsive', true, { responsive: true }),
  ChartOptionMock('responsiveanimationduration', 'foo', {
    responsiveAnimationDuration: 'foo'
  }),
  ChartOptionMock('maintainaspectratio', true, { maintainAspectRatio: true }),
  ChartOptionMock('aspectratio', 'foo', { aspectRatio: 'foo' }),
  ChartOptionMock('callbackResize', 'foo', { onResize: 'foo' }),
  ChartOptionMock('devicepixelratio', 'foo', { pointHoverBorderColor: 'foo' }),
  ChartOptionMock('events', 'foo', { events: 'foo' }),
  ChartOptionMock('callbackClick', 'foo', { onClick: 'foo' }),
  ChartOptionMock('callbackHover', 'foo', { onHover: 'foo' })
  //ChartOptionMock('type', BAR_CHART_TYPE, { type: BAR_CHART_TYPE }),
];

describe('Chart: property', () => {
  const element = createElement('x-chart', { is: Chart });
  document.body.appendChild(element);
  describe.each(TEST_DATA_PROPERTIES)('matches options', item => {
    test(`${item.propertyName}`, async () => {
      element[item.propertyName] = item.propertyValue;

      await expect(element[item.propertyName]).toBe(item.propertyValue);
    });
  });
  test('Accept uuid', async () => {
    element.uuid = 'xyz';

    await expect(element.uuid).toBe('xyz');
  });
});

describe('Chart: methods', () => {
  let chart, title, legend, dataSet, data;
  beforeAll(() => {
    chart = createElement('x-chart', { is: Chart });
    document.body.appendChild(chart);
    title = createElement('x-title', { is: Title });
    chart.appendChild(title);
    legend = createElement('x-legend', { is: Legend });
    chart.appendChild(legend);
    dataSet = createElement('x-dataset', { is: DataSet });
    chart.appendChild(dataSet);
    data = createElement('x-data', { is: Data });
    dataSet.appendChild(data);
    data.label = 'data';
    data.detail = '[10]';
    title.text = 'test';
    legend.position = 'top';
    chart.type = LINE_CHART_TYPE;
  });

  afterAll(() => {
    dataSet.removeChild(data);
    chart.removeChild(dataSet);
    chart.removeChild(title);
    chart.removeChild(legend);
    document.body.removeChild(chart);
  });
  test('updateChart', async () => {
    return flushPromises()
      .then(flushPromises)
      .then(flushPromises)
      .then(() => {
        chart.updateChart();
        expect(chart.uuid).toBeDefined();
      });
  });
  test('resetChart', async () => {
    return flushPromises().then(() => {
      chart.resetChart();
      expect(chart.uuid).toBeDefined();
    });
  });
  test('renderChart', async () => {
    return flushPromises().then(() => {
      chart.renderChart();
      expect(chart.uuid).toBeDefined();
    });
  });
  test('stopChart', async () => {
    return flushPromises().then(() => {
      const r = chart.stopChart();
      expect(r).toBeInstanceOf(Chart);
    });
  });
  test('resizeChart', async () => {
    return flushPromises().then(() => {
      const r = chart.resizeChart();
      expect(r).toBeInstanceOf(Chart);
    });
  });
  test('clearChart', async () => {
    return flushPromises().then(() => {
      const r = chart.clearChart();
      expect(r).toBeInstanceOf(Chart);
    });
  });
  test('toBase64ImageChart', async () => {
    return flushPromises().then(() => {
      const b64 = chart.toBase64ImageChart();
      expect(b64).toBeDefined();
    });
  });
  test('generateLegendChart', async () => {
    return flushPromises().then(() => {
      const legendChart = chart.generateLegendChart();
      expect(legendChart).toBeDefined();
    });
  });
  test('getElementAtEventChart', async () => {
    return flushPromises().then(() => {
      // todo expose events on the canvas
      // expose catcher to implement.
      // define one catcher and trigger an event
      // Fetch the event and call getElementAtEventChart
      //const el = chart.getElementAtEventChart();
      //expect(el).toBeDefined();
    });
  });
  test('getElementsAtEventChart', async () => {
    return flushPromises().then(() => {
      //const el = chart.getElementsAtEventChart();
      //expect(el).toBeDefined();
    });
  });
  test('getDatasetAtEventChart', async () => {
    return flushPromises().then(() => {
      //const el = chart.getDatasetAtEventChart();
      //expect(el).toBeDefined();
    });
  });
  test('getDatasetMetaChart', async () => {
    return flushPromises().then(() => {
      const el = chart.getDatasetMetaChart(0);
      expect(el).toBeDefined();
    });
  });

  test('destroyChart', async () => {
    return flushPromises()
      .then(flushPromises)
      .then(() => {
        chart.destroyChart();
        expect(chart.uuid).toBeDefined();
      });
  });
});
// TODO: checkOptions()

// TODO: Option event Listener & Disconnect Event Listener

// TODO: Create VS Update chart
