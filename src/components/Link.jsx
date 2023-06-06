import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContentMix, setContentInput } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { v4 as uuidv4 } from 'uuid';
import urlMetadate from "url-metadata";
import urlMetadata  from 'url-metadata';
import axios from 'axios';

const Link = () => {
    const content = useSelector(state => state.content);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();


    const addToMix = async () => {
        const link = content.input;
        console.log('link', link, content);
        console.log (urlMetadata);

        let url;

        try {
            url = new URL(link);
        } catch (err) {
            console.error('Link error', err);
            return dispatch(setAlertMsg({status: 'error', msg: "Please enter a valid URL."}));
        }

        let request, response, title;

        request = {
            url: 'https://query.pymnts.com:6255/meta',
            method: 'post',
            data: {
                url: link
            }
        }
        try {
            response = axios(request);
        } catch (err) {
            console.error(err);
            title = url.pathname;
        }

        console.log('response', response);

        const mix = {
            type: 'url',
            id: uuidv4(),
            url: link,
            title,
            source: url.hostname
        }

        dispatch(addContentMix({mix}));
    }

  return (
    <Box>
        <Input margin=".5rem 0 0 20rem" width="calc(100% - 20rem)" type='text' placeholder='Link to webpage, pdf, document, video, or audio'
        value={content.input} onChange={(e) => {
            dispatch(setAlertMsg({status:'error', msg: ''}))
            dispatch(setContentInput({input: e.target.value}))
        }}
        />
         <Box width={"100%"} display={'flex'} justifyContent={'flex-end'} marginTop=".5rem">
            <Button variant={'primary'} onClick={addToMix}>Submit</Button>
         </Box>
    </Box>
  )
}

export default Link