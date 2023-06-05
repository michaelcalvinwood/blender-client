import { Box, Button, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { setContentType, setContentSubType, setContentSubSubType, setContentInput, resetContentInfo } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';

const Content = () => {
    
    const dispatch = useDispatch();
    const content = useSelector(state => state.content);

    const types = [
        {type: 'Google Search', id: "google_search"},
        {type: 'PYMNTS Search', id: 'pymnts_search'},
        {type: 'URL', id: "URL"},
        {type: 'PDF', id: 'pdf_text'},
        {type: 'Word Doc', id: 'docx'},
        {type: 'Seed', id: 'seed'},
        {type: 'Text', id: 'text'},
        {type: 'Transcript', id: 'transcript'},
        {type: 'Video (non-transcript)', id: 'video'},
        {type: 'Audio (non-transcript)', id: 'audio'},
        {type: 'Website', id: 'website'}        
    ]
    
    const resetAlert = () => dispatch(setAlertMsg({status: 'error', msg:""}));

    const processQuery = async () => {
        
        if (!content.input) return dispatch(setAlertMsg({status: 'error', msg:"Please provide search terms"}));

        const request = {
            url: `https://query.pymnts.com:6255/query`,
            method: 'post',
            data: {
                type: content.subType ? content.type + '_' + content.subType : content.type,
                query: content.input
            }
        }

        let response;

        try {
            response = await axios(request);
        } catch (err) {
            return console.error('processQuery error', err);
        }
      
        console.log(response.data);
    }
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
        {content.type === 'google_search' && (<div>
            <Input width="calc(100% - 20rem)" margin=".5rem 0 0 20rem" type='text' placeholder="Search terms" value={content.input ? content.input : ''} 
                onChange={(e) => {  
                    resetAlert();
                    dispatch(setContentInput({input: e.target.value}))
                }}/>
            
            <RadioGroup width="calc(100% - 20rem)" display='flex' justifyContent={'center'} margin=".5rem 0 0 20rem" onChange={(e) => { console.log(e); dispatch(setContentSubSubType({subType: e}))}} value={content.subSubType ? content.subSubType : 'news'}>
            <Stack direction='row'>
                <Radio value='last_hour'>Hour</Radio>
                <Radio value='last_day'>Day</Radio>
                <Radio value='last_week'>Week</Radio>
                <Radio value='last_month'>Month</Radio>
                <Radio value='last_year'>Year</Radio>
                
            </Stack>
            </RadioGroup>

            <RadioGroup width="calc(100% - 20rem)" display='flex' justifyContent={'center'} margin=".5rem 0 0 20rem" onChange={(e) => { console.log(e); dispatch(setContentSubType({subType: e}))}} value={content.subType ? content.subType : 'news'}>
            <Stack direction='row'>
                <Radio value='news'>News</Radio>
                <Radio value='web'>Web</Radio>
                <Radio value='video'>Video</Radio>
            </Stack>
            </RadioGroup>
            
            <Box width="calc(100% - 20rem)" margin=".5rem 0 0 20rem">
                <Button variant={'primary'} display='block' margin='auto' width='fit-content' 
                onClick={processQuery}>Submit</Button>
            </Box>
        </div>)}
    </Box>
  )
}

export default Content