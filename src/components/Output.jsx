import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { setOutputType } from '../store/sliceOutput';
import { setContentStage } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';

const Output = () => {
    const output = useSelector (state => state.output);
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    console.log('output', output);

    const types = [
        {type: 'News Article', id:'news'},
        {type: 'Blog Post', id: 'blog'},
        {type: 'Summary', id: 'summary'},
        {type: 'Outline', id: 'outline'},
        {type: 'Marketing Collateral', id: 'marketing'}
    ]
    const defaultType = types[0];

  useEffect(() => {
    dispatch(setAlertMsg({status: 'success', msg: ''}))
  }, [])    

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