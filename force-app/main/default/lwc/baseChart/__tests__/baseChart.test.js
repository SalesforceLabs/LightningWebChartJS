import { createElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import BaseChart from 'c/baseChart';

const STATIC_RESOURCE_NAME = 'chartjs_v280';

describe('BaseChart: ChartJs library', () => {
  it('Load the ChartJS static resource', () => {
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
