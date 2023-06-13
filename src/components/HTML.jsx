import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { setOutputLength } from '../store/sliceOutput';
import { setContentStage } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { setHtmBold, setHtmlBullets, setHtmlHeadings, setHtmlLinks, setHtmlTables } from '../store/sliceHTML';

const HTML = () => {
    const html = useSelector(state => state.html);
    const dispatch = useDispatch();

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">What HTML elements do you want?</Text>
        <Box display='flex' justifyContent={'space-between'} width="calc(100% - 20rem)">
            <Checkbox isChecked={html.links} onChange={() => dispatch(setHtmlLinks({links: !html.links}))}>Links</Checkbox>
            <Checkbox isChecked={html.headings} onChange={() => dispatch(setHtmlHeadings({headings: !html.headings}))}>Headings</Checkbox>
            <Checkbox isChecked={html.tables} onChange={() => dispatch(setHtmlTables({tables: !html.tables}))}>Tables</Checkbox>
            <Checkbox isChecked={html.bullets} onChange={() => dispatch(setHtmlBullets({bullets: !html.bullets}))}>Bullets</Checkbox>
            <Checkbox isChecked={html.bold} onChange={() => dispatch(setHtmBold({bold: !html.bold}))}>Bold</Checkbox>
        </Box>
    </Box>
  )
}

export default HTML