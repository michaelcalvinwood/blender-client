import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';

const store = configureStore({ 
    reducer: {
       output: outputReducer
    }
});

export default store;