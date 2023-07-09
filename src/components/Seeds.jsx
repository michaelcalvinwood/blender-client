import { Box, Button, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContentMix, setContentInput } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { v4 as uuidv4 } from 'uuid';
import urlMetadate from "url-metadata";
import urlMetadata  from 'url-metadata';
import axios from 'axios';
import {FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

const Seeds = () => {
    const content = useSelector(state => state.content);
    const alert = useSelector(state => state.alert);
    
    const seeds = useSelector(state => state.seeds);

    console.log(seeds);

    const dispatch = useDispatch();
    const addToMix = async (id) => {
        console.log("add to mix", id);
        return;
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

        let type = 'url';
        let title;
        let filename = link.substring(link.lastIndexOf('/') + 1);
        let extension = filename.substring(filename.lastIndexOf('.')+1).toLowerCase();

        if (extension) {
            console.log('filename extension', filename, extension);
            //type += `_${extension}`;
            title = filename;    
        } else {
            let request, response;

            request = {
                url: 'https://query.pymnts.com:6255/meta',
                method: 'post',
                data: {
                    url: link
                }
            }
            try {
                response = await axios(request);
                title = response.data;
            } catch (err) {
                console.error(err);
                title = url.pathname;
            }
        } 
        
        const mix = {
            type,
            id: uuidv4(),
            url: link,
            title,
            source: url.hostname
        }

        console.log('mix', mix);

        dispatch(addContentMix({mix}));
    }

  return (
    <Box >
        {seeds.map(seed => {
            const urlInfo = new URL(seed.url);
            console.log(urlInfo);
            return (
                <Box display="flex" justifyContent={'space-between'} alignItems='center' width="100%" fontSize="1.25rem" margin=".5rem 0" borderBottom="1px solid black">
                    <Link href={seed.link} target="_blank"><Text>{seed.title}</Text></Link>
                    <Text>{urlInfo.hostname}</Text>
                    <FaRegSquare onClick={() => addToMix(seed.id)} cursor={'pointer'}/>
                </Box>
            )
        })}
         
    </Box>
  )
}

export default Seeds