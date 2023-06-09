import { createSlice } from '@reduxjs/toolkit';

const sliceContent = createSlice({
    name: 'content',
    initialState: {type: 'google_search', subType: 'news', subSubType: 'last_month', input: null, queryResults: [], mix: [], stage: 'input'},
    reducers: {
        setContentType: (state, action) => {
            state.type = action.payload.type;
            if (action.payload.type === 'google_search') {
                state.subType = 'news';     
                state.subSubType = 'last_month';
            }
            state.queryResults = [];
            return state;
        },
        setContentSubType: (state, action) => {
            state.subType = action.payload.subType;
            return state;
        },
        setContentSubSubType: (state, action) => {
            state.subSubType = action.payload.subSubType;
            return state;
        },
        setContentInput: (state, action) => {
            state.input = action.payload.input;
            return state;
        },
        setContentQueryResults: (state, action) => {
            state.queryResults = [...action.payload.queryResults];
            return state;
        },
        removeContentQueryResult: (state, action) => {
            state.queryResults = state.queryResults.filter(query => query.id !== action.payload.id);
            return state;
        },
        addContentMix: (state, action) => {
            state.mix.unshift(action.payload.mix);
            return state;
        },
        setContentMix: (state, action) => {
            state.mix = [...action.payload.mix];
            return state;
        },
        setContentStage: (state, action) => {
            state.stage = action.payload.stage;
            return state;
        },
        setContentArticle: (state, action) => {
            state.article = action.payload.article;
            return state;
        },
        removeContentMix: (state, action) => {
            console.log('payload', action.payload)
            state.mix = state.mix.filter(mix => mix.id !== action.payload.id);
            return state;
        },
        resetContentInfo: (state, action) => {
            state.subType = state.type === 'google_search' ? 'news' : '';
            state.subSubType = state.type === 'google_search' ? 'last_month': '';
            state.input = null;
            state.queryResults = [];
            state.rawArticle = '';
            return state; 
        }
    }
});

export const { setContentType, setContentSubType, setContentSubSubType, setContentInput, resetContentInfo, setContentQueryResults, removeContentQueryResult, addContentMix, removeContentMix, setContentMix, setContentStage } = sliceContent.actions;

export default sliceContent.reducer;