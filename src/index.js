import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './js/components/App';
import { createAppStore } from './js/state/store/AppStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

ReactDOM.render(<App store={ createAppStore() }/>, document.getElementById('app'));
