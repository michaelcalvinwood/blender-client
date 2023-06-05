import { createSlice } from '@reduxjs/toolkit';

const sliceTopics = createSlice({
    name: 'topic',
    initialState: '',
    reducers: {
        setTopic: (state, action) => {
            state = action.payload.topic;
            return state;
        }
    }
});

export const { setTopic } = sliceTopics.actions;

export default sliceTopics.reducer;