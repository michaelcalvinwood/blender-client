import { Box, Button, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContentMix } from '../store/sliceContent';

const Whisper = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const loc = text.indexOf("\n");

  const title = loc < 120 ? text.substring(0, loc) : text.substring(0, 120) + '...';

  const addText = () => {
    const mix = {
      type: `text`,
      id: uuidv4(),
      url: text,
      title,
      source: 'transcript'
    }

    console.log('mix', mix);

    dispatch(addContentMix({mix}));
    setText('');
  }

  return (
    <Box>
        <Button variant={'primary'} display={'block'} margin={'1rem auto .5rem auto'} onClick={addText}>Submit</Button>
        <Textarea rows={30}  value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste transcript here."/>
    </Box>
  )
}

export default Whisper