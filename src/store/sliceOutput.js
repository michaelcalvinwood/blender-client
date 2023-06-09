import { createSlice } from '@reduxjs/toolkit';

const sliceOutput = createSlice({
    name: 'output',
    initialState: {type: 'news', customType: '', length: 'long'},
    reducers: {
        setOutputType: (state, action) => {
            state.type = action.payload.type;
            return state;
        },
        setOutputLength: (state, action) => {
            state.length = action.payload.length;
            return state;
        }
    }
});

export const { setOutputType, setOutputLength } = sliceOutput.actions;

export default sliceOutput.reducer;