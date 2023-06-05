import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';
import contentReducer from './sliceContent';

const store = configureStore({ 
    reducer: {
       output: outputReducer,
       topic: topicReducer,
       content: contentReducer

    }
});

export default store;