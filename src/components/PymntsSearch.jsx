import { Box, Button, Input, Select, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { setContentType, setContentSubType, setContentSubSubType, setContentInput, resetContentInfo, setContentQueryResults } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';


const PymntsSearch = () => {
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();

    const resetAlert = () => dispatch(setAlertMsg({status: 'error', msg:""}));

    const processQuery = async () => {
        
        if (!content.input) return dispatch(setAlertMsg({status: 'error', msg:"Please provide search terms"}));

        const request = {
            url: `https://query.pymnts.com:6255/query`,
            method: 'post',
            data: {
                type: content.subType ? content.type + '_' + content.subType : content.type,
                query: content.input,
                timePeriod: content.subSubType
            }
        }

        console.log(request);

        let response;

        try {
            response = await axios(request);
        } catch (err) {
            return console.error('processQuery error', err);
        }
      
        dispatch(setContentQueryResults({queryResults: response.data}));
    }

  return (
    <div>
            <Input width="calc(100% - 20rem)" margin=".5rem 0 0 20rem" type='text' placeholder="Search terms" value={content.input ? content.input : ''} 
                onChange={(e) => {  
                    resetAlert();
                    dispatch(setContentInput({input: e.target.value}))
                }}/>
            
            <RadioGroup width="calc(100% - 20rem)" display='flex' justifyContent={'center'} margin=".5rem 0 0 20rem" onChange={(e) => { console.log(e); dispatch(setContentSubSubType({subSubType: e}))}} value={content.subSubType ? content.subSubType : 'news'}>
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
            
            <Box width="calc(100% - 20rem)" margin=".5rem 0 0 20rem" display={'flex'} justifyContent={'center'}>
                <Button variant={'primary'} display='block' width='5rem' 
                onClick={processQuery}>Submit</Button>
            </Box>
        </div>
  )
}

export default PymntsSearch