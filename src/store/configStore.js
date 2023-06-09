import { configureStore } from '@reduxjs/toolkit';
import outputReducer from './sliceOutput';
import topicReducer from './sliceTopic';
import contentReducer from './sliceContent';
import alertReducer from './sliceAlert';
import spinnerReducer from './sliceSpinner';
import loginReducer from './sliceLogin';
import htmlReducer from './sliceHTML';
import wordpressReducer from './sliceWordpress';
import progressReducer from './sliceProgress';
import seedsReducer from './sliceSeeds';

const store = configureStore({ 
    reducer: {
        alert: alertReducer,
        output: outputReducer,
        topic: topicReducer,
        content: contentReducer,
        spinner: spinnerReducer,
        login: loginReducer,
        html: htmlReducer,
        wordpress: wordpressReducer,
        progress: progressReducer,
        seeds: seedsReducer
    }
});

export default store;