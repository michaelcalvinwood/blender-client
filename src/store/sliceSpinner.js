import { createSlice } from '@reduxjs/toolkit';

const sliceSpinner = createSlice({
    name: 'spinner',
    initialState: false,
    reducers: {
        setSpinner: (state, action) => {
            return action.payload.spinner;
        }
    }
});

export const { setSpinner } = sliceSpinner.actions;

export default sliceSpinner.reducer;