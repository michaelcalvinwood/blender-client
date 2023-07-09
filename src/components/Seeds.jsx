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
    const addToMix = async (seed) => {
        console.log("add to mix", seed);
        const urlInfo = new URL(seed.url);
        const mix = {
            type: 'url',
            id: uuidv4(),
            url: seed.link,
            title: seed.title,
            source: urlInfo.hostname
        }

        console.log('mix', mix);

        dispatch(addContentMix({mix}));
    }

  return (
    <Box >
        {seeds.map(seed => {
            const urlInfo = new URL(seed.url);
            console.log(urlInfo);
            const test = content.mix.find(entry => entry.url === seed.link);
            if (test) return;
            return (
                <Box key={`seed-${seed.id}`}display="flex" justifyContent={'space-between'} alignItems='center' width="100%" fontSize="1.25rem" margin=".5rem 0" borderBottom="1px solid black">
                    <Link href={seed.link} target="_blank"><Text width='40rem'>{seed.title}</Text></Link>
                    <Text>{urlInfo.hostname}</Text>
                    <FaRegSquare onClick={() => addToMix(seed)} cursor={'pointer'}/>
                </Box>
            )
        })}
         
    </Box>
  )
}

export default Seeds