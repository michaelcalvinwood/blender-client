import { Box, Button, Heading, Link, Progress, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaRegTrashAlt} from 'react-icons/fa';
import { removeContentMix, setContentStage } from '../store/sliceContent';
import { setTitlesAndTags } from '../store/sliceWordpress';
import * as socket from '../socket';
import Wordpress from './Wordpress';
import { setProgress } from '../store/sliceProgress';
import { setAlertMsg } from '../store/sliceAlert';

const Mix = () => {
    const content = useSelector(state => state.content);
    const topic = useSelector(state => state.topic);
    const output = useSelector(state => state.output);
    const login = useSelector(state => state.login);
    const html = useSelector(state => state.html);
    const wordpress = useSelector(state => state.wordpress);
    const progress = useSelector(state => state.progress);

    console.log('Mix progress', progress);

    console.log('mix', content.mix);

    const dispatch = useDispatch();

    const handleMix = () => {
        if (!topic) return dispatch(setAlertMsg({status: 'error', msg: 'Please enter a topic.'}));
        window.open('https://blender.pymnts.com', '_blank');    
        dispatch(setContentStage({stage: 'input'}));
        socket.emit('mix', {content: content.mix, topic, output, login, html});
        dispatch(setTitlesAndTags({titles: [], tags: []}))
        dispatch(setProgress({current: 0, max: 10}));
    }

    if (!content.mix.length) return <></>
  return (
    <Box border='2px solid rgb(0, 120, 255)' borderRadius={'8px'} padding={'.25rem .5rem'} margin=".5rem 0" fontSize='1.1rem'>
        <Heading size='sm' variant={'primary'} textAlign={'center'}>Content</Heading>
       
        {content.mix.map(mix => (
            <Box key={mix.id}>
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
            <Button variant={'primary'} textAlign={'right'} width='5rem' onClick={handleMix}>Mix</Button>
        </Box>
        <Progress value={progress.max !== 0 ? (progress.current / progress.max) * 100 : 0} size='md' margin=".75rem 0"/>
        { wordpress.titles.length !== 0 && <Wordpress stage={content.stage} article={content.article}/>}
        {content.stage !== 'input' && content.stage !== 'rawArticle' && <Heading borderTop='2px solid #0078FF' paddingTop="1rem" margin="1rem 0" size="sm">{`${content.stage.charAt(0).toUpperCase() + content.stage.slice(1)}`}</Heading>}
        {content.stage === 'text' && <Box>
            {content.mix.map(mix => {
                return <Box key={`${content.stage}-${mix.id}`} marginTop="1rem">
                    <h3>{mix.id}</h3>
                    <div>{mix.text}</div>
                </Box>
            })}
         </Box>
        }
        {content.stage === 'chunks' && <Box>
            {content.mix.map(mix => {
                return <Box key={`${content.stage}-${mix.id}`} marginTop="1rem">
                    <h3>{mix.id}</h3>
                   {mix.chunks.map((chunk, index) => {
                     return <Text key={`chunk-${mix.id}-${index}`} borderBottom="1px solid #0078FF" paddingBottom='.5rem' marginBottom={'.5rem'}>{chunk}</Text>
                   })}
                </Box>
            })}
         </Box>
        }
         {content.stage === 'info' && <Box>
            {content.mix.map(mix => {
                return <Box key={`${content.stage}-${mix.id}`} marginTop="1rem">
                    <h3>{mix.id}</h3>
                   {mix.info.map((info, index) => {
                     return <Text key={`chunk-${mix.id}-${index}`} borderBottom="1px solid #0078FF" paddingBottom='.5rem' marginBottom={'.5rem'}>{info.info}</Text>
                   })}
                </Box>
            })}
         </Box>
        }
        {content.stage === 'rawArticle' && <Box marginTop="1rem" dangerouslySetInnerHTML={{__html: content.article}}>{}</Box>}
    </Box>
  )
}

export default Mix