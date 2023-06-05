import { createSlice } from '@reduxjs/toolkit';

const sliceContent = createSlice({
    name: 'output',
    initialState: {type: 'google_search', mix: []},
    reducers: {
        setContentType: (state, action) => {
            state.type = action.payload.type;
            return state;
        }
    }
});

export const { setContentType } = sliceContent.actions;

export default sliceContent.reducer;