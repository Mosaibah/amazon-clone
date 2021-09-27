import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StateProvider } from './StateProvider';
import {initialState, reducer} from './reducer.js'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


