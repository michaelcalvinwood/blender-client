import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTopic } from '../store/sliceTopic';

const Topic = () => {
    const topic = useSelector(state => state.topic);
    const dispatch = useDispatch();

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
    <Text width="19rem">What do you want to write about?</Text>
    <Input width="calc(100% - 20rem)" type='text' placeholder='Topic (Optional)' value={topic} onChange={(e) => dispatch(setTopic({topic: e.target.value}))}/>
</Box>
  )
}

export default Topic