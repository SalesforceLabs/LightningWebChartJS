import { createElement } from 'lwc';

import App from 'app/app';

const app = createElement('app-app', { is: App });
document.querySelector('#app').appendChild(app);
