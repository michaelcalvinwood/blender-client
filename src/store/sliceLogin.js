import { createSlice } from '@reduxjs/toolkit';

const sliceLogin = createSlice({
    name: 'login',
    initialState: {username: '', password: '', isLoggedIn: false},
    reducers: {
        setUsername: (state, action) => {
            
            state.username = action.payload.username;
            return state;
        },
        setPassword: (state, action) => {
           
            state.password = action.payload.password;
            return state;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = true;
            return state;
        }
    }
});

export const { setPassword, setUsername, setIsLoggedIn } = sliceLogin.actions;

export default sliceLogin.reducer;