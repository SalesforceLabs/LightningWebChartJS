import ChartConfigService from 'c/chartConfigService';
import { ATTRIBUTE_CARTESIAN_AXES } from 'c/constants';

describe('c-chart-config-service', () => {
  test(`Get new instance of default configuration`, () => {
    const firstInstance = ChartConfigService.defaultConfiguration();
    const secondInstance = ChartConfigService.defaultConfiguration();

    expect(firstInstance).toStrictEqual(secondInstance); // Objects should have the same type and structure
    expect(firstInstance).not.toBe(secondInstance); // Objects should not be a shallow copy but a new instance
  });
  test(`Default configuration`, () => {
    const chartConfigService = new ChartConfigService();
    expect(chartConfigService.getConfig()).toEqual(
      ChartConfigService.defaultConfiguration()
    );
  });
  test(`Update config with null option`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { attribut: 'value' };
    chartConfigService.updateConfig(testSubject, null);
    expect(chartConfigService.getConfig()).toMatchObject(testSubject);
  });
  test(`Update config with null option and then update again`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { attribut: 'value' };
    chartConfigService.updateConfig(testSubject, null);
    expect(chartConfigService.getConfig()).toMatchObject(testSubject);
  });
  test(`Update config with array`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { test: ['attribut'] };
    chartConfigService.updateConfig(testSubject, 'test');
    expect(chartConfigService.getConfig().test).toMatchObject(testSubject);
  });
  test(`Update scales config`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = {
      yAxes: [{ uuid: 1, gridLines: { offsetGridLines: 10 } }]
    };
    chartConfigService.updateConfig(testSubject, ATTRIBUTE_CARTESIAN_AXES);
    expect(
      chartConfigService.getConfig()[ATTRIBUTE_CARTESIAN_AXES]
    ).toMatchObject(testSubject);
  });
  test(`Update scales config with multiple scales on same axis`, () => {
    const chartConfigService = new ChartConfigService();
    const firstAxis = { uuid: 1, gridLines: { offsetGridLines: 10 } };
    const secondAxis = { uuid: 2, gridLines: { offsetGridLines: 20 } };
    chartConfigService.updateConfig(
      { yAxes: [firstAxis] },
      ATTRIBUTE_CARTESIAN_AXES
    );
    chartConfigService.updateConfig(
      { yAxes: [secondAxis] },
      ATTRIBUTE_CARTESIAN_AXES
    );
    const testSubject = { yAxes: [firstAxis, secondAxis] };
    expect(
      chartConfigService.getConfig()[ATTRIBUTE_CARTESIAN_AXES]
    ).toMatchObject(testSubject);
  });
  test(`Update config with new object`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { test: { attribut: 'val' } };
    chartConfigService.updateConfig(testSubject, 'test');
    expect(chartConfigService.getConfig().test).toMatchObject(testSubject);
  });
  test(`Update config with object`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { test: { attribut: 'val1' } };
    chartConfigService.updateConfig(testSubject, 'test');
    testSubject.test.attribut = 'val2';
    expect(chartConfigService.getConfig().test).toMatchObject(testSubject);
  });
  test(`Remove scales configuration`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = {
      yAxes: [{ uuid: 1, gridLines: { offsetGridLines: 10 } }]
    };
    chartConfigService.updateConfig(testSubject, ATTRIBUTE_CARTESIAN_AXES);
    chartConfigService.removeConfig(testSubject, ATTRIBUTE_CARTESIAN_AXES);
    expect(chartConfigService.getConfig()).toEqual(
      ChartConfigService.defaultConfiguration()
    );
  });
  test(`Remove configuration`, () => {
    const chartConfigService = new ChartConfigService();
    const testSubject = { attribut: 'value' };
    chartConfigService.updateConfig(testSubject, 'test');
    chartConfigService.removeConfig(testSubject, 'test');
    expect(chartConfigService.getConfig()).toEqual(
      ChartConfigService.defaultConfiguration()
    );
  });

  test(`Clean basic object`, () => {
    expect(
      ChartConfigService.cleanObject(ChartConfigService.defaultConfiguration())
    ).toEqual(ChartConfigService.defaultConfiguration());
  });
  test(`Clean object with array`, () => {
    const testSubject = { array: [10, 20, 30] };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(testSubject);
  });

  test(`Clean object with array of object`, () => {
    const testSubject = { array: [{ a1: 1, a2: { b1: 10 } }] };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(testSubject);
  });

  test(`Clean object with undefined`, () => {
    const expected = { a: 'test' };
    const testSubject = { ...expected, b: undefined };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });

  test(`Clean object with empty object`, () => {
    const expected = { a: 'test' };
    const testSubject = { ...expected, b: {} };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });

  test(`Clean object with sub object`, () => {
    const expected = { a: 'test' };
    const testSubject = { ...expected, b: { c: undefined } };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });

  test(`Clean object with empty array`, () => {
    const expected = { a: 'test' };
    const testSubject = { ...expected, b: [] };
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });

  test(`Clean object with empty array of object`, () => {
    const expected = { a: 'test', b: [10] };
    const testSubject = { ...expected };
    testSubject.b = [...expected.b];
    testSubject.b.push(undefined);
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });
  test(`Clean object with empty object containing array of empty object`, () => {
    const expected = { a: 'test', b: [{ c: 10 }] };
    const testSubject = { ...expected };
    testSubject.b = [...expected.b];
    testSubject.b.push({ c: undefined });
    expect(ChartConfigService.cleanObject(testSubject)).toEqual(expected);
  });
});
