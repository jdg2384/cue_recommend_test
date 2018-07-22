import Dispatcher from "../dispatcher";

export function postAnswer(value) {
    // console.log('Recommend Action', value)
    Dispatcher.dispatch({ 
        type: 'POST_ANSWER', 
        data: {value},
    })    
}

