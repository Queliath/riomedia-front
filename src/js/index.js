import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { createAppStore } from './state/store/AppStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/main.scss';

ReactDOM.render(<App store={createAppStore()}/>, document.getElementById('app'));
