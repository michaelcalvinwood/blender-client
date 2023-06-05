import { createSlice } from '@reduxjs/toolkit';

const sliceContent = createSlice({
    name: 'output',
    initialState: {type: 'google_search', subType: '', input: null, mix: []},
    reducers: {
        setContentType: (state, action) => {
            state.type = action.payload.type;
            return state;
        },
        setContentSubType: (state, action) => {
            state.subType = action.payload.subType;
            return state;
        },
        setContentInput: (state, action) => {
            state.input = action.payload.input;
            return state;
        },
        resetContentInfo: (state, action) => {
            state.subType = '';
            state.input = null;
            return state; 
        }
    }
});

export const { setContentType, setContentSubType, setContentInput, resetContentInfo } = sliceContent.actions;

export default sliceContent.reducer;