import { createSlice } from '@reduxjs/toolkit';

const sliceLogin = createSlice({
    name: 'login',
    initialState: {username: '', password: '', token: null},
    reducers: {
        setUsername: (state, action) => {
            
            state.username = action.payload.username;
            return state;
        },
        setPassword: (state, action) => {
           
            state.password = action.payload.password;
            return state;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
            return state;
        }
    }
});

export const { setPassword, setUsername, setToken } = sliceLogin.actions;

export default sliceLogin.reducer;