import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/'
import './index.css';
import ChakraWrapper from './components/ChakraWrapper';

import { Provider } from 'react-redux';
import store from './store/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraWrapper />
  </Provider>
);

