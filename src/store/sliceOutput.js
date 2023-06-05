import { createSlice } from '@reduxjs/toolkit';

const sliceOutput = createSlice({
    name: 'output',
    initialState: {type: 'news', customType: ''},
    reducers: {
        setOutputType: (state, action) => {
            state.type = action.payload.type;
            return state;
        }
    }
});

export const { setOutputType } = sliceOutput.actions;

export default sliceOutput.reducer;