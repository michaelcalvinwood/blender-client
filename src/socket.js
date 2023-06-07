let socket = null;

export const setupTheSocket = (socketio, url, store) => {
    console.log('setupTheSocket',url);
    
    if (socket) return;
    socket = socketio(url);
    console.log('dispatch')
    // store.dispatch({
    //     type: 'counter/changeCounterValue',
    //     payload: {
    //         amount: 20
    //     }
    // })
}

export const emit = (event, ...args) => socket.emit(event, ...args);