import logo from './logo.svg';
import './App.css';
import { setMsg } from './store/sliceAlert';
import { Alert, AlertIcon, Button, Container, Heading } from '@chakra-ui/react';
import Output from './components/Output';
import Topic from './components/Topic';
import Content from './components/Content';
import { useSelector } from 'react-redux';

function App() {
  const alert = useSelector(state => state.alert);
  return (
    <Container>
      <Heading size={'md'} fontWeight={'bold'} textAlign={'center'} >PYMNTS Blender</Heading>
      <Alert status={alert.status} marginBottom={'0'} visibility={alert.status && alert.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {alert.msg}
      </Alert>
      <Output/>
      <Topic />
      <Content />
    </Container>
  )
}

export default App;
