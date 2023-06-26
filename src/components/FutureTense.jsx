import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { setFutureTenseRemoval } from '../store/sliceOutput';
import { setContentStage } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';

const FutureTense = () => {
    const output = useSelector (state => state.output);
    const login = useSelector(state => state.login);
    const dispatch = useDispatch();


    const types = [
        {type: 'Hour', id:'hour'},
        {type: 'Day ', id: 'day'},
        {type: 'Week', id: 'week'},
        {type: 'Month', id: 'month'},
       
    ]
    const defaultType = types[0];

  useEffect(() => {
    dispatch(setAlertMsg({status: 'success', msg: ''}))
  }, [])    

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">Future tense filter when older than?</Text>
        <Select width="calc(100% - 20rem)" value={output.futureTenseRemoval} onChange={(e) => dispatch(setFutureTenseRemoval({futureTenseRemoval: e.target.value}))}>
            {types.map(type => (<option key={type.id} value={type.id} >{type.type}</option>))} 
        </Select>
    </Box>
  )
}

export default FutureTense