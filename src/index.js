import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter
} from "react-router-dom";

import storeGenerator from './reducer/index';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const { store, persistor} = storeGenerator();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
