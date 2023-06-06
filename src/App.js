import logo from './logo.svg';
import './App.css';
import { setMsg } from './store/sliceAlert';
import { Alert, AlertIcon, Box, Button, Container, Heading, Spinner } from '@chakra-ui/react';
import Output from './components/Output';
import Topic from './components/Topic';
import Content from './components/Content';
import { useSelector } from 'react-redux';
import QueryResults from './components/QueryResults';
import Mix from './components/Mix';
import { useEffect, useState } from 'react';
function App() {
  const alert = useSelector(state => state.alert);
  const content = useSelector(state => state.content);
  const spinner = useSelector(state => state.spinner);

  const [mode, setMode] = useState('input');

  useEffect(() => {
    if (content.mix.length === 0 && mode !== 'input') setMode('input');
  })
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
      { content.mix.length > 0 && <Box position='fixed' top="1rem" right="1rem" zIndex="10" backgroundColor={'#0078FF'} color='white' padding=".25rem" width="4rem" height="4rem" borderRadius="50%" display='flex' justifyContent={'center'} alignItems={'center'} fontSize={'1.5rem'} cursor={'pointer'} onClick={() => mode === 'input' ? setMode('mix') : setMode('input')}>{content.mix.length}</Box>
      }
      {spinner && <Box height='100vh' width="100vw" position='fixed' top='0' left='0' display='flex' justifyContent={'center'} alignItems={'center'} zIndex={100}>
        <Spinner size='xl' color='navy'/>
    </Box> }
    </Container>
  )
}

export default App;
