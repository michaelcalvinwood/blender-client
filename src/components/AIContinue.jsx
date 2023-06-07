import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContentMix } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import axios from 'axios';
import { setSpinner } from '../store/sliceSpinner';

const AIContinue = () => {
  const [text, setText] = useState('');

  const alert = useSelector(state => state.alert);
  
  const dispatch = useDispatch();

  const loc = text.indexOf("\n");

  const title = loc < 120 ? text.substring(0, loc) : text.substring(0, 120) + '...';

  const addText = () => {
    const mix = {
      type: `text`,
      id: uuidv4(),
      url: text,
      title,
      source: 'AIContinue'
    }

    console.log('mix', mix);

    dispatch(addContentMix({mix}));
    setText('');
    
  }

  const handleQuery = async () => {
    if (!prompt) return dispatch(setAlertMsg({status: 'error', msg: 'Please enter a prompt.'}));

    dispatch(setSpinner({spinner:true}));

    let request = {
      url: `https://query.pymnts.com:6255/AIContinue`,
      method: 'post',
      data: {
        prompt: text
      }
    }

    let response;

    try {
      response = await axios(request);
    } catch (err) {
      dispatch(setSpinner({spinner:false}));
      return console.error(err);
    }

    setText(text.trimEnd() + ' ' + response.data);
    dispatch(setSpinner({spinner:false}));
  }

  return (
    <Box>
        <Box display={'flex'} justifyContent={'space-between'} margin=".5rem 0 0 20rem">
          <Button variant={'primary'} display={'block'} width="6rem" margin="1rem 0 .5rem 0" onClick={handleQuery}>Continue</Button>
          <Button variant={'primary'} display={'block'} width="6rem" margin="1rem 0 .5rem 0" onClick={() => {
            setText('');
           
          }}>Reset</Button>
          <Button variant={'primary'} display={'block'} width="6rem" margin="1rem 0 .5rem 0" onClick={addText} visibility={text ? 'visibile': 'hidden'}>Submit</Button>
        </Box>
        
        <Textarea rows={30}  value={text} onChange={(e) => setText(e.target.value)}/>
    </Box>
  )
}

export default AIContinue