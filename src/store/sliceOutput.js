import { createSlice } from '@reduxjs/toolkit';

const sliceOutput = createSlice({
    name: 'output',
    initialState: {type: 'news', customType: '', length: 'long', futureTenseRemoval: 'week'},
    reducers: {
        setOutputType: (state, action) => {
            state.type = action.payload.type;
            return state;
        },
        setOutputLength: (state, action) => {
            state.length = action.payload.length;
            return state;
        },
        setFutureTenseRemoval: (state, action) => {
            state.futureTenseRemoval = action.payload.futureTenseRemoval;
            return state;
        }
    }
});

export const { setOutputType, setOutputLength, setFutureTenseRemoval } = sliceOutput.actions;

export default sliceOutput.reducer;