import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTitle } from '../store/sliceWordpress';
import { Box, Heading, Select, Button } from '@chakra-ui/react';

const Wordpress = ({stage}) => {
  const wordpress = useSelector(state => state.wordpress);
  const { titles, selectedTitle } = wordpress;

  console.log(titles.length, wordpress);

  const dispatch = useDispatch();

  let current = titles.length ? titles[selectedTitle] : '';

  const upload = () => {

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