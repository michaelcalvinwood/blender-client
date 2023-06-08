import React, { useEffect, useState } from 'react'
import { Alert, AlertIcon, Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { setAlertMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername, setToken } from '../store/sliceLogin';
import * as wp from '../utils/wordpress';
import axios from 'axios';

const Login = () => {
    const [autoLogin, setAutoLogin] = useState(false);
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert);
    const login = useSelector(state => state.login);

    const handleSubmit = async () => {
        const request = {
            url: `https://blender.pymnts.com:6256/login`,
            method: 'post',
            data: {
                username: login.username,
                password: login.password
            }
        }

        let response;

        try {
            response = await axios(request);
        } catch (err) {
            console.error(err);
            dispatch(setAlertMsg({status: 'error', msg: 'invalid credentials'}))
            return;
        }
        
        localStorage.setItem('username', login.username);
        localStorage.setItem('password', login.password);
        dispatch(setToken({token: response.data}));
    }

    useEffect(() => {
        if (login.password && login.username && !autoLogin) {
            setAutoLogin(true);
            handleSubmit();
        }

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        if (!username || !password) return;

        if (username === login.username && password === login.password) return;

        dispatch(setUsername({username}));
        dispatch(setPassword({password}));
    })

  return (
    <Container>
        <Heading textAlign='center'>PYMNTS InstaNews</Heading>
        <Alert status={alert.status} marginBottom={'0'} visibility={alert.status && alert.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {alert.msg}
        </Alert>
        <Box display="flex" alignItems={'center'} margin=".5rem auto .5rem auto" width="fit-content" flexDirection={'column'}>
            <Text width="5rem;">Username</Text>
            <Input type="text" width="20rem" value={login.username} onChange={(e) => {
                dispatch(setAlertMsg({status: 'success', msg: ''}))
                dispatch(setUsername({ username: e.target.value}));
            }}></Input>
        </Box>
        <Box display="flex" alignItems={'center'} margin="auto" width="fit-content" flexDirection={'column'}>
            <Text width="5rem;">Password</Text>
            <Input type="password" width="20rem" value={login.password} onChange={(e) => {
                dispatch(setAlertMsg({status: 'success', msg: ''}))
                dispatch(setPassword({ password: e.target.value}));
            }}></Input>
        </Box>
        <Button display='flex' margin='1rem auto' width={'fit-content'} onClick={handleSubmit}>Submit</Button>
    </Container>
  )
}

export default Login