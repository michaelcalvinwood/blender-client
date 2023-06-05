import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa';
import { removeContentMix } from '../store/sliceContent';

const Mix = () => {
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();

    if (!content.mix.length) return <></>
  return (
    <Box>
        <Heading size='sm' variant={'primary'} textAlign={'center'}>Mix</Heading>
        {content.mix.map(mix => (
            <Box display={'flex'} justifyContent={'space-between'} width={'100%'} margin=".5rem 0">
                <Text width='calc(100% - 29rem)'>{mix.title}</Text>
                <Text width="6rem">{mix.type}</Text>
                <FaRegTrashAlt size={24} color="red" onClick={() => dispatch(removeContentMix({id: mix.id}))} cursor={'pointer'}/>
            </Box>
        ))

        }
    </Box>
  )
}

export default Mix