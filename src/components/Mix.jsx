import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Mix = () => {
    const content = useSelector(state => state.content);

    if (!content.mix.length) return <></>
  return (
    <Box>
        <Heading size='sm' variant={'primary'} textAlign={'center'}>Mix</Heading>
        
    </Box>
  )
}

export default Mix