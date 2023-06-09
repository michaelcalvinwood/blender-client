import React, { useCallback, useState } from 'react'
import { Box, Text, Progress } from '@chakra-ui/react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid';
import { useDispatch } from 'react-redux';
import { addContentMix } from '../store/sliceContent';
import { setSpinner } from '../store/sliceSpinner';

const File = () => {

  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  const dispatch = useDispatch();

  const uploadToS3 = async (
    uploadUrl,
    file,
    fields = {},
    onProgressChange = () => {},
  ) => {
    console.log('uploadToS3', uploadUrl, file);
    setFileName(file.name);
    setFileSize(file.size);

    const formData = new FormData();
  
    Object.keys(fields).forEach((key) => {
      formData.append(key, fields[key]);
    });
    formData.append("Content-Type", file.type);
  
    //  Make sure to pass data first otherwise it'll throw an error like
    // Bucket POST must contain a field named 'key'.  If it is specified, please check the order of the fields.
    formData.append("file", file, file?.name);
  
    const parseProgress = (progressEvent) => {
      const progressPercentage =
        (progressEvent.loaded / progressEvent.total) * 100;
      //console.log('progressPercentage', progressPercentage);
      setUploadProgress(progressPercentage);
      //onProgressChange(progressPercentage);
    };
  
    try {
      const res = await axios.put(uploadUrl, file, {
        onUploadProgress: parseProgress,
        headers: {
          'x-amz-acl': 'public-read',
          'Content-Type': file.type
        }
      });
  
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

    const onDrop = useCallback( async acceptedFiles => {
      dispatch(setSpinner({spinner: true}))
        const date = new Date();
        let folder = date.toISOString();
        folder = folder.substring(0, folder.indexOf('T'));

        for (let i = 0; i < acceptedFiles.length; ++i) {
          let file = acceptedFiles[i];
          console.log('accepted files', folder, acceptedFiles);
          let request = {
            url: `https://query.pymnts.com:6255/presignedUrl`,
            method: 'post',
            data: {
              key: `${folder}/${uuidv4()}-${file.name}`
            }
          }

          console.log('request', request);

          let response, url;

          try {
            response = await axios(request);
            url = response.data
            response = await uploadToS3(url, file);

          } catch (err) {
            console.error(err);
            response = false;
          }

          if (response) {
            let link = new URL(url);

            const mix = {
              type: `url`,
              subType: `${file.type.substring(file.type.indexOf('/') + 1)}`,
              id: uuidv4(),
              url: url.substring(0, url.indexOf('?')),
              title: file.name,
              source: 'file'
          }
  
          console.log('mix', mix);
  
          dispatch(addContentMix({mix}));
          }
        };

        setFileName('');
        dispatch(setSpinner({spinner: false}))
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
          { fileName && <Box>
            <Text>{fileName} ({fileSize.toLocaleString()} bytes)</Text>
            <Progress value={uploadProgress} max={100}  />
          </Box>

          }
        </Box>
    </Box>
  )
}

export default File