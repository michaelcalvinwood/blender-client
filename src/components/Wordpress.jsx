import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTitle } from '../store/sliceWordpress';
import { Box, Heading, Select } from '@chakra-ui/react';

const Wordpress = () => {
  const wordpress = useSelector(state => state.wordpress);
  const { titles, selectedTitle } = wordpress;

  console.log(titles.length, wordpress);

  const dispatch = useDispatch();

  let current = titles.length ? titles[selectedTitle] : '';

  return (
    <Box>
      <Heading size="sm">Title</Heading>
       <Select width="100%" value={selectedTitle} onChange={(e) => dispatch(setSelectedTitle({index: Number(e.target.value)}))}>
            {titles.map((title, index) => (<option key={title+index} value={index} >{title}</option>))} 
        </Select>
    </Box>
  )
}

export default Wordpress