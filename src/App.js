import logo from './logo.svg';
import './App.css';
import { Button, Container, Heading } from '@chakra-ui/react';
import Output from './components/Output';

function App() {
  return (
    <Container>
      <Heading size={'md'} fontWeight={'bold'} textAlign={'center'} >PYMNTS Blender</Heading>
      <Output/>
    </Container>
  )
}

export default App;
