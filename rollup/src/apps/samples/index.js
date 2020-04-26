import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import SampleApp from 'c/sampleApp';

const sampleApp = createElement('lwcc-samples', { is: App });
const container = document.body.querySelector('.container') || document.body;
container.appendChild(sampleApp);
