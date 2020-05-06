import { createElement } from 'lwc';
import Axis from 'c/Axis';
import { ATTRIBUTE_CARTESIAN_AXES, ATTRIBUTE_RADIAL_AXES } from 'c/constants';

const TEST_DATA_PROPERTIES = [
  ChartOptionMock('type', 'test', { type: 'test' })
];

describe('c-axis', () => {
  testAttribute(Axis, TEST_DATA_PROPERTIES);
  test('gridtype and option', () => {
    const axis = createElement('x-axis', { is: Axis });
    document.body.appendChild(axis);

    axis.gridtype = ATTRIBUTE_CARTESIAN_AXES;
    expect(axis.gridtype).toEqual(ATTRIBUTE_CARTESIAN_AXES);

    axis.gridtype = ATTRIBUTE_RADIAL_AXES;
    expect(axis.gridtype).toEqual(ATTRIBUTE_RADIAL_AXES);

    axis.gridtype = 'bad value';
    expect(axis.gridtype).toEqual(ATTRIBUTE_CARTESIAN_AXES);
  });
});
