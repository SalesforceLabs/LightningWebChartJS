import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import Playground from 'app/playground';

const playground = createElement('app-playground', { is: Playground });
document.body.appendChild(playground);
