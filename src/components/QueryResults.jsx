import { Box, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';
import { addContentMix } from '../store/sliceContent';
const QueryResults = () => {
    const dispatch = useDispatch();
    const content = useSelector(state => state.content);
    

    if (!content.queryResults.length) return <></>
    const { queryResults } = content;

    const addToMix = urlInfo => {
        const mix = {
            type: 'url',
            id: urlInfo.id,
            url: urlInfo.link,
            title: urlInfo.title,
            source: urlInfo.domain,
            date: urlInfo.date
        }

        dispatch(addContentMix({mix}));
    }

  return (
    <Box>
        {/* <Heading size='sm' variant={'primary'} textAlign={'center'}>Query Results</Heading> */}
        {queryResults.map((mix) => {
            const {id, title, link, domain, date} = mix;
            const test = content.mix.find(mix => mix.id === id);
            if (test) return <Box key={id}></Box>;
            return <Box key={id} display={'flex'} justifyContent={'space-between'} alignContent="center" fontSize="1.1rem" width={'100%'} padding=".75rem 0" cursor='pointer' borderBottom="1px solid darkgrey" margin="1rem 0 0 0"
                
                >
                <Link href={link} target='_blank' width='calc(100% - 30rem)'>{title}</Link>
                <Link href={link} target="_blank" width='15rem'>{domain}</Link>
                <Text width='12rem'>{date}</Text>
                <FaRegSquare size={24} onClick={(e) => addToMix(mix)}/>
            </Box>
        })}
    </Box>
  )
}

export default QueryResults