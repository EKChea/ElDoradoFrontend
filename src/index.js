import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker.js';

import Filing from './components/Filing.js';
import { getSocketUrl } from './utils.js'

const socket = getSocketUrl();

// Render the components, picking up where react left off on the server
const element = <Filing socket={socket}/>;

ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
