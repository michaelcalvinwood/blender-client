import { Box, Button, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { setContentType, setContentSubType, setContentSubSubType, setContentInput, resetContentInfo, setContentQueryResults } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import GoogleSearch from './GoogleSearch';
import PymntsSearch from './PymntsSearch';
import Link from './Link';
import File from './File';
import TextInput from './TextInput';
import ChatGPT from './ChatGPT';
import Transcript from './Transcript';


const Content = () => {
    
    const dispatch = useDispatch();
    const content = useSelector(state => state.content);

    const types = [
        {type: 'Google Search', id: "google_search", input: <GoogleSearch />},
        {type: 'PYMNTS Search', id: 'pymnts_search', input: <PymntsSearch />},
        {type: 'Link', id: "URL", input:<Link />},
        {type: 'File', id: 'file', input:<File />},
        {type: 'Transcript', id: 'transcript', input:<Transcript />},
        {type: 'Text', id: 'text', input:<TextInput />},
        {type: 'ChatGPT', id: 'chatGPT', input: <ChatGPT />},
        {type: 'Seed', id: 'seed', input:<></>},
        {type: 'Website', id: 'website', input:<></>}
    ]
    
    
  return (
    <Box>
        <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
            <Text width="19rem">What type of content do you want to add?</Text>
            <Select width="calc(100% - 20rem)" value={content.type} 
                onChange={(e) => {
                    dispatch(resetContentInfo());
                    dispatch(setContentType({type: e.target.value}));
                }}>
                {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
            </Select>
        </Box>
        {types.find(entry => entry.id === content.type).input}
    </Box>
  )
}

export default Content