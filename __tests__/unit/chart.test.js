import { createElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';

import { BAR_CHART_TYPE, LINE_CHART_TYPE } from 'c/constants';

import Chart from 'c/chart';

const STATIC_RESOURCE_NAME = 'chartjs_v280';

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

    // Validation that the loadScript promise is called once.
    expect(loadScript.mock.calls.length).toBe(1);
    // Validation that the chartjs static resource is passed as parameter.
    expect(loadScript.mock.calls[0][1]).toEqual(STATIC_RESOURCE_NAME);

    document.body.removeChild(element);
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
// TODO: checkOptions()

// TODO: Option event Listener & Disconnect Event Listener

// TODO: Create VS Update chart
