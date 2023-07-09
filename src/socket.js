let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    console.log('setupTheSocket',url);

    const options = {
        type: 'content/setContentArticle',
        payload: {
            article:'yoyo'
        }
    }

    console.log('dispatch', options);

    store.dispatch(options)


    if (socket) return;
    socket = socketio(url);
    console.log('dispatch')

    socket.on('tagsAndTitles', tat => {
        console.log('TAGSANDTITLES', tat);

        store.dispatch({
            type: 'wordpress/setTitlesAndTags',
            payload: {
                tags: tat.tags,
                titles: tat.titles
            }
        })
    })

    socket.on('progress', (progress) => {
        const {current, max } = progress;
        console.log('PROGRESS', current, max);
        store.dispatch({
            type: 'progress/setProgress',
            payload: {current, max}
        });
    })

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

    socket.on('chunks', (mix) => {
    
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

    socket.on('info', (mix) => {
        store.dispatch({
            type: 'content/setContentMix',
            payload: {
                mix
            }
        })

        store.dispatch({
            type: 'content/setContentStage',
            payload: {
                stage: 'info'
            }
        })
    })

    socket.on('rawArticle', (info) => {
        console.log('socket on rawArticle', info)
        
        const options = {
            type: 'content/setContentArticle',
            payload: {
                article: info.rawArticle
            }
        }
    
        console.log('dispatch', options);
    
        store.dispatch(options)

        store.dispatch({
            type: 'content/setContentStage',
            payload: {
                stage: 'rawArticle'
            }
        })
    })

    socket.on('seeds', seeds => {
        store.dispatch({
            type: 'seeds/setSeeds',
            payload: {
                seeds
            }
        })
    })
   
}

export const emit = (event, ...args) => socket.emit(event, ...args);