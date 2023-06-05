import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react'

const Output = () => {
    const output = useSelector (state => state.output);
    const types = [
        {type: 'news article', id:'news'},
        {type: 'blog post', id: 'blog'}
    ]
    const defaultType = types[0];

  return (
    <Box>
        <Text>What do you want to create?</Text>
        <Select value={output.type}>
            {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
        </Select>
    </Box>
  )
}

export default Output