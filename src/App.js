import logo from './logo.svg';
import './App.css';
import { Button, Container, Heading } from '@chakra-ui/react';

function App() {
  return (
    <Container>
      <Heading fontWeight={'bold'} textAlign={'center'} >Hello World</Heading>
      <Button variant={'primary'}>Hello</Button>
    </Container>
  )
}

export default App;
