import { createSlice } from '@reduxjs/toolkit';

const sliceWordpress = createSlice({
    name: 'wordpress',
    initialState: {titles: [], tags: [], postId: 0, selectedTitle: 0},
    reducers: {
        setTitlesAndTags: (state, action) => {
            const { titles, tags } = action.payload;
            state.titles = [...titles];
            state.tags = [...tags];
            state.selectedTitle = 0;
            state.postId = 0;
            return state;
        },
        setSelectedTitle: (state, action) => {
            state.selectedTitle = action.payload.index;
            return state;
        }
    }
});

export const { setTitlesAndTags, setSelectedTitle } = sliceWordpress.actions;

export default sliceWordpress.reducer;