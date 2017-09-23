import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filing from './components/Filing.js';
import registerServiceWorker from './registerServiceWorker.js';


// Feed socket
// const feedSocket = 'ws://127.0.0.1:8000/feed/';
const feedSocket = 'wss://eldoradoapi.herokuapp.com/feed/';

// Render the components, picking up where react left off on the server
const element = <Filing socket={feedSocket}/>;

ReactDOM.render(element, document.getElementById('root'));

registerServiceWorker();
