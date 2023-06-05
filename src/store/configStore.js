import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';
import contentReducer from './sliceContent';
import alertReducer from './sliceAlert';

const store = configureStore({ 
    reducer: {
        alert: alertReducer,
        output: outputReducer,
        topic: topicReducer,
        content: contentReducer

    }
});

export default store;