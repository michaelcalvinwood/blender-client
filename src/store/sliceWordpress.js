import { createSlice } from '@reduxjs/toolkit';

const sliceWordpress = createSlice({
    name: 'wordpress',
    initialState: {titles: [], tags: [], postId: 0},
    reducers: {
        setTitlesAndTags: (state, action) => {
            const { titles, tags } = action.payload;
            state.titles = [...titles];
            state.tags = [...tags];
            return state;
        }
    }
});

export const { setTitlesAndTags } = sliceWordpress.actions;

export default sliceWordpress.reducer;