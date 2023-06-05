import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';

const store = configureStore({ 
    reducer: {
       output: outputReducer,
       topic: topicReducer

    }
});

export default store;