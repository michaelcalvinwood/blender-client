import { createSlice } from '@reduxjs/toolkit';

const sliceAlert = createSlice({
    name: 'alert',
    initialState: {status: 'error', msg: ''},
    reducers: {
        setMsg: (state, action) => {
            const { status, msg } = action.payload;
            return {status, msg}
        }
    }
});

export const { setMsg } = sliceAlert.actions;

export default sliceAlert.reducer;