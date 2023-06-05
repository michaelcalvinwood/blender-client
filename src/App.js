import logo from './logo.svg';
import './App.css';
import { Button, Container, Heading } from '@chakra-ui/react';
import Output from './components/Output';
import Topic from './components/Topic';
function App() {
  return (
    <Container>
      <Heading size={'md'} fontWeight={'bold'} textAlign={'center'} >PYMNTS Blender</Heading>
      <Output/>
      <Topic />
    </Container>
  )
}

export default App;
