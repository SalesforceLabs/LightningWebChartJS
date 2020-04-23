import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import App from 'c/app';

const sampleApp = createElement('lwcc-samples', { is: App });
document.body.appendChild(sampleApp);
