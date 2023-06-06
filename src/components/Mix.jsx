import { Box, Button, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa';
import { removeContentMix } from '../store/sliceContent';

const Mix = () => {
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();

    if (!content.mix.length) return <></>
  return (
    <Box border='2px solid rgb(0, 120, 255)' borderRadius={'8px'} padding={'.25rem .5rem'} margin=".5rem 0" fontSize='1.1rem'>
        <Heading size='sm' variant={'primary'} textAlign={'center'}>Content</Heading>
       
        {content.mix.map(mix => (
            <Box>
                { mix.type !== 'text' && <Box id={mix.id} display={'flex'} justifyContent={'space-between'} width={'100%'} padding=".75rem 0" borderBottom="1px solid darkgrey">
                    <Link href={mix.url} target="_blank" width='calc(100% - 29rem)'>{mix.title}</Link>
                    <Link href={mix.url} target="_blank" width="15rem">{mix.source}</Link>
                    <FaRegTrashAlt size={24} color="red" onClick={() => dispatch(removeContentMix({id: mix.id}))} cursor={'pointer'}/>
                    </Box>
                }
                { mix.type === 'text' && <Box id={mix.id} display={'flex'} justifyContent={'space-between'} width={'100%'} padding=".75rem 0" borderBottom="1px solid darkgrey">
                    <Text width='calc(100% - 29rem)'>{mix.title}</Text>
                    <Text width="15rem">{mix.source}</Text>
                    <FaRegTrashAlt size={24} color="red" onClick={() => dispatch(removeContentMix({id: mix.id}))} cursor={'pointer'}/>
                    </Box>
                }        
            </Box>
              
           
        ))

        }
         <Box display={'flex'} justifyContent={'center'} margin=".5rem 0">
            <Button variant={'primary'} textAlign={'right'} width='5rem'>Mix</Button>
        </Box>
    </Box>
  )
}

export default Mix