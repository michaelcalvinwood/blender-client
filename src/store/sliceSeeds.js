import { createSlice } from '@reduxjs/toolkit';

const sliceSeeds = createSlice({
    name: 'seeds',
    initialState: [],
    reducers: {
        setSeeds: (state, action) => {
            state = action.payload.seeds;
            return state;
        }
    }
});

export const { setSeeds } = sliceSeeds.actions;

export default sliceSeeds.reducer;