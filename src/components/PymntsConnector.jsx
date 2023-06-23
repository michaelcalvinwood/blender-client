import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Select, Text } from '@chakra-ui/react';
import { togglePymntsConnector } from '../store/sliceOutput';
import { setContentStage } from '../store/sliceContent';
import { setAlertMsg } from '../store/sliceAlert';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { setHtmBold, setHtmlBullets, setHtmlHeadings, setHtmlLinks, setHtmlTables } from '../store/sliceHTML';

const PymntsConnector = () => {
    const output = useSelector(state => state.output);
    const dispatch = useDispatch();

  return (
    <Box width="100%" display='flex' justifyContent={'space-between'} alignItems={'center'} margin="1rem 0 0 0">
        <Text width="19rem">Append related PYMNTS articles?</Text>
        <Box display='flex' justifyContent={'space-between'} width="calc(100% - 20rem)">
            <Checkbox isChecked={output.pymntsConnector} onChange={() => dispatch(togglePymntsConnector())}></Checkbox>
        </Box>
    </Box>
  )
}

export default PymntsConnector