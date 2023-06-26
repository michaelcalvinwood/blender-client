import { createSlice } from '@reduxjs/toolkit';

const sliceProgress = createSlice({
    name: 'progress',
    initialState: {current: 0, max: 0},
    reducers: {
        setProgress: (state, action) => {
            const { current, max } = action.payload;
            console.log('setProgress', current, max)
            state.current = current;
            state.max = max;
            return state;
        }
    }
});

export const { setProgress } = sliceProgress.actions;

export default sliceProgress.reducer;