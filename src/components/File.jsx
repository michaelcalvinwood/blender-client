import React, { useCallback } from 'react'
import { Box } from '@chakra-ui/react'
import {useDropzone} from 'react-dropzone'

const File = () => {
    const onDrop = useCallback( async acceptedFiles => {
        console.log('accepted files', acceptedFiles);

        // foreach file
            // get presigned url
            // upload to dropzone
            // somehow display files and progress
    
    })
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    
  return (
    <Box>
        <Box margin=".5rem 0 0 20rem" height="96px" padding='.5rem' border='1px solid var(--chakra-colors-gray-200)' borderRadius='8px' cursor='pointer'>
          <div {...getRootProps()}>
              <input {...getInputProps()} />
              {
                  <p style={{height:'6rem', width:'100%'}}>&nbsp;Drag 'n' drop some files here, or click to select files</p>
              }
          </div>
        </Box>
    </Box>
  )
}

export default File