import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTitle } from '../store/sliceWordpress';
import { setContentStage } from '../store/sliceContent';
import { Box, Heading, Select, Button } from '@chakra-ui/react';
import * as socket from '../socket';

const Wordpress = ({stage, article}) => {
  const wordpress = useSelector(state => state.wordpress);
  const login = useSelector(state => state.login);
  const content = useSelector(state => state.content);
  const topic = useSelector(state => state.topic);
  const output = useSelector(state => state.output);
  const html = useSelector(state => state.html);
  
  const { titles, selectedTitle, tags } = wordpress;

  console.log(titles.length, wordpress);

  const dispatch = useDispatch();

  let current = titles.length ? titles[selectedTitle] : '';

  const upload = () => {
    socket.emit('upload', {article, title: titles[selectedTitle], titles, tags, login, content: content.mix, topic, output, html});
    dispatch(setContentStage({stage: 'input'}));
  }

  return (
    <Box width="100%" margin="1.5rem 0" borderTop='2px solid #0078FF'>
      <Heading size="sm">Title</Heading>
       <Select width="100%" value={selectedTitle} onChange={(e) => dispatch(setSelectedTitle({index: Number(e.target.value)}))}>
            {titles.map((title, index) => (<option key={title+index} value={index} >{title}</option>))} 
       </Select>
       { stage === 'rawArticle' &&  <Box display={'flex'} justifyContent={'center'} margin="1rem 0">
            <Button variant={'primary'} textAlign={'right'} width='5rem' onClick={upload}>Upload</Button>
        </Box>

       }
    </Box>
  )
}

export default Wordpress