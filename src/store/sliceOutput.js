import { createSlice } from '@reduxjs/toolkit';

const sliceOutput = createSlice({
    name: 'output',
    initialState: {type: 'news', customType: '', length: 'long', futureTenseRemoval: 'week', pymntsConnector: false},
    reducers: {
        setOutputType: (state, action) => {
            state.type = action.payload.type;
            return state;
        },
        setOutputLength: (state, action) => {
            state.length = action.payload.length;
            return state;
        },
        setFutureTenseRemoval: (state, action) => {
            state.futureTenseRemoval = action.payload.futureTenseRemoval;
            return state;
        },
        togglePymntsConnector: (state, action) => {
            let value = !state.pymntsConnector;
            state.pymntsConnector = value;
            return state; 
        }
    }
});

export const { setOutputType, setOutputLength, setFutureTenseRemoval, togglePymntsConnector } = sliceOutput.actions;

export default sliceOutput.reducer;