import { createElement } from 'lwc';
import BarChart from 'c/barChart';
import BaseAttribute from 'c/baseAttribute';
import { BAR_CHART_TYPE } from 'c/constants';

const ELEMENT_NAME = 'x-chart';
let ELEMENT;

beforeAll(() => {
    // Create element
    ELEMENT = createElement(ELEMENT_NAME, {
        is: BarChart
    });
    document.body.appendChild(ELEMENT);
})

describe('c-bar-chart', () => {
    test('DOM Elemement exists', () => {
        const queriedElement = ELEMENT.shadowRoot.querySelector(ELEMENT_NAME);
        expect(queriedElement).toBeDefined();
    })
    test('Canvas exists', () => {
        const queriedElement = ELEMENT.shadowRoot.querySelector('canvas');
        expect(queriedElement).toBeDefined();
    })

    test('Type is correct', () => {
        expect(BarChart.type).toBe(BAR_CHART_TYPE);
    })

    test('Accepts attribute components', () => {
        const attributeIdentifier = 'x-attribute';
        const attribute = createElement(attributeIdentifier, {
            is: BaseAttribute
        });
        ELEMENT.appendChild(attribute);
        
        const queriedElement = ELEMENT.shadowRoot.querySelector(attributeIdentifier);
        expect(queriedElement).toBeDefined();
    })
})