import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import Samples from 'app/samples';

const samples = createElement('app-samples', { is: Samples });
document.body.appendChild(samples);
