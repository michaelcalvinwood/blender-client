import { Box, Select, Text } from '@chakra-ui/react'
import React from 'react';
import { setContentType } from '../store/sliceContent';
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {
    const dispatch = useDispatch();
    const content = useSelector(state => state.content)

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
  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">What type of content do you want to add?</Text>
        <Select width="calc(100% - 20rem)" value={content.type} onChange={(e) => dispatch(setContentType({type: e.target.value}))}>
            {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
        </Select>
    </Box>
  )
}

export default Content