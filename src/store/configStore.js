import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';
import contentReducer from './sliceContent';
import alertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';

const store = configureStore({ 
    reducer: {
        alert: alertReducer,
        output: outputReducer,
        topic: topicReducer,
        content: contentReducer,
        spinner: spinnerReducer

    }
});

export default store;