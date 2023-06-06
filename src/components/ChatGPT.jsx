import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContentMix } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import axios from 'axios';

const ChatGPT = () => {
  const [text, setText] = useState('');
  const [prompt, setPrompt] = useState('');

  const alert = useSelector(state => state.alert);

  const dispatch = useDispatch();

  const loc = text.indexOf("\n");

  const title = prompt;

  const addText = () => {
    const mix = {
      type: `text`,
      id: uuidv4(),
      url: text,
      title,
      source: 'chatGPT'
    }

    console.log('mix', mix);

    dispatch(addContentMix({mix}));
    setText('');
    setPrompt('');
  }

  const handleQuery = async () => {
    if (!prompt) return dispatch(setAlertMsg({status: 'error', msg: 'Please enter a prompt.'}));

    let request = {
      url: `https://query.pymnts.com:6255/chatGPT`,
      method: 'post',
      data: {
        prompt
      }
    }

    let response;

    try {
      response = await axios(request);
    } catch (err) {
      return console.error(err);
    }

    setText(response.data);
  }

  return (
    <Box>
       <Input margin=".5rem 0 0 20rem" width="calc(100% - 20rem)" type='text' placeholder='Prompt'
          value={prompt} 
          onChange={(e) => {
              setPrompt(e.target.value);
          }}
        />
        <Box display={'flex'} justifyContent={'space-between'} margin=".5rem 0 0 20rem">
          <Button variant={'primary'} display={'block'} width="5rem" margin="1rem 0 .5rem 0" onClick={handleQuery}>Query</Button>
          <Button variant={'primary'} display={'block'} width="5rem" margin="1rem 0 .5rem 0" onClick={addText} visibility={text ? 'visibile': 'hidden'}>Submit</Button>
        </Box>
        
        <Textarea rows={30}  value={text} onChange={(e) => setText(e.target.value)}/>
    </Box>
  )
}

export default ChatGPT