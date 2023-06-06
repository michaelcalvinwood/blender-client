import logo from './logo.svg';
import './App.css';
import { setMsg } from './store/sliceAlert';
import { Alert, AlertIcon, Box, Button, Container, Heading } from '@chakra-ui/react';
import Output from './components/Output';
import Topic from './components/Topic';
import Content from './components/Content';
import { useSelector } from 'react-redux';
import QueryResults from './components/QueryResults';
import Mix from './components/Mix';
import { useState } from 'react';
function App() {
  const alert = useSelector(state => state.alert);
  const content = useSelector(state => state.content);
  const [mode, setMode] = useState('input');

  return (
    <Container>
      <Heading size={'md'} fontWeight={'bold'} textAlign={'center'} >PYMNTS Blender</Heading>
      <Alert status={alert.status} marginBottom={'0'} visibility={alert.status && alert.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {alert.msg}
      </Alert>
      {mode === 'mix' && <Mix />}
      {mode === 'input' && <Box>     
        <Output/>
        <Topic />
        <Content />    
        <QueryResults />
      </Box>}
      <Box position='fixed' top="1rem" right="1rem" zIndex="10" backgroundColor={'#0078FF'} color='white' padding=".25rem" width="4rem" height="4rem" borderRadius="50%" display='flex' justifyContent={'center'} alignItems={'center'} fontSize={'1.5rem'} cursor={'pointer'} onClick={() => mode === 'input' ? setMode('mix') : setMode('input')}>{content.mix.length}</Box>
    </Container>
  )
}

export default App;
