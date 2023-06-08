let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    console.log('setupTheSocket',url);

    if (socket) return;
    socket = socketio(url);
    console.log('dispatch')

    socket.on('msg', ({status, msg}) => {
        store.dispatch({
            type: 'alert/setAlertMsg',
            payload: {
                status, msg
            }
        })
    })
    socket.on('text', (mix) => {
        console.log('got text')
        store.dispatch({
            type: 'content/setContentMix',
            payload: {
                mix
            }
        })

        store.dispatch({
            type: 'content/setContentStage',
            payload: {
                stage: 'text'
            }
        })
    })

    socket.on('gotChunks', (mix) => {
        console.log('got chunks');
        store.dispatch({
            type: 'content/setContentMix',
            payload: {
                mix
            }
        })

        store.dispatch({
            type: 'content/setContentStage',
            payload: {
                stage: 'chunks'
            }
        })
    })
   
}

export const emit = (event, ...args) => socket.emit(event, ...args);