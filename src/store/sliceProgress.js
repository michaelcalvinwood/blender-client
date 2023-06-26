import { createSlice } from '@reduxjs/toolkit';

const sliceProgress = createSlice({
    name: 'topic',
    initialState: {current: 0, max: 0},
    reducers: {
        setProgress: (state, action) => {
            const { current, max } = action.payload;
            state.current = current;
            state.max = max;
            return state;
        }
    }
});

export const { setProgress } = sliceProgress.actions;

export default sliceProgress.reducer;