import Dispatcher from "../dispatcher";

export function postAnswer(value) {
    Dispatcher.dispatch({ 
        type: 'POST_ANSWER', 
        data: {value},
    })    
}

