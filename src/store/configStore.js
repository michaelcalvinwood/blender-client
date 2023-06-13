import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';
import contentReducer from './sliceContent';
import alertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';
import loginReducer from './sliceLogin';
import htmlReducer from './sliceHTML';

const store = configureStore({ 
    reducer: {
        alert: alertReducer,
        output: outputReducer,
        topic: topicReducer,
        content: contentReducer,
        spinner: spinnerReducer,
        login: loginReducer,
        html: htmlReducer
    }
});

export default store;