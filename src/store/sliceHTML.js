import { createSlice } from '@reduxjs/toolkit';

const sliceHTML = createSlice({
    name: 'html',
    initialState: {links: true, headings: true, tables: true, bold: true, bullets: true},
    reducers: {
       setHtmlLinks: (state, action) => {
        state.links = action.payload.links;
        return state;
       },
       setHtmlHeadings: (state, action) => {
        state.headings = action.payload.headings;
        return state;
       },
       setHtmlTables: (state, action) => {
        state.tables = action.payload.tables;
        return state;
       },
       setHtmBold: (state, action) => {
        state.bold = action.payload.bold;
        return state;
       },
       setHtmlBullets: (state, action) => {
        state.bullets = action.payload.bullets;
        return state;
       },
    }
});

export const { setHtmBold, setHtmlBullets, setHtmlHeadings, setHtmlLinks, setHtmlTables } = sliceHTML.actions;

export default sliceHTML.reducer;