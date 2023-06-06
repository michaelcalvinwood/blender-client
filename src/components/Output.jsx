import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { setOutputType } from '../store/sliceOutput';

const Output = () => {
    const output = useSelector (state => state.output);
    const dispatch = useDispatch();

    const types = [
        {type: 'News Article', id:'news'},
        {type: 'Blog Post', id: 'blog'}
    ]
    const defaultType = types[0];

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">What do you want to create?</Text>
        <Select width="calc(100% - 20rem)" value={output.type} onChange={(e) => dispatch(setOutputType({type: e.target.value}))}>
            {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
        </Select>
    </Box>
  )
}

export default Output