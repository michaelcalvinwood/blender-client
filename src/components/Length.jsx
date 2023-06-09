import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { setOutputLength } from '../store/sliceOutput';
import { setContentStage } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';

const Length = () => {
    const output = useSelector (state => state.output);
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();

    const types = [
        {type: 'Exhaustive', id:'exhaustive'},
        {type: 'Longform', id: 'long'},
        {type: 'Shortform', id: 'short'},
        {type: 'Condensed', id: 'condensed'},

    ]
    const defaultType = types[0];

  useEffect(() => {
    dispatch(setAlertMsg({status: 'success', msg: ''}))
  }, [])    

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">What length do you want it?</Text>
        <Select width="calc(100% - 20rem)" value={output.length} onChange={(e) => dispatch(setOutputLength({type: e.target.value}))}>
            {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
        </Select>
    </Box>
  )
}

export default Length