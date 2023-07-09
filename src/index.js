import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/'
import './index.css';
import ChakraWrapper from './components/ChakraWrapper';

import { Provider } from 'react-redux';
import store from './store/configStore';

import { io } from 'socket.io-client';
import * as socket from './socket';

socket.setupTheSocket(io, `https://blender.pymnts.com:6256`, store);
//socket.setupTheSocket(io, `https://blender.pymnts.com:6257`, store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraWrapper />
  </Provider>
);

