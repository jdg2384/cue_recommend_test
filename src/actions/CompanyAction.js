import Dispatcher from "../dispatcher";
import Axios from 'axios';

const api = 'https://peaceful-tor-89083.herokuapp.com/api'

export function updateUser(value) {
    console.log('action triggered User')
    Dispatcher.dispatch({ 
        type: 'RECEIVE_USER', 
        data: value,
    })    
}

export function updateText(value) {
    console.log('action triggered Text')
    Dispatcher.dispatch({ 
        type: 'RECEIVE_TEXT', 
        data: value,
    })    
}

export function updateAllUsers() {
    Axios.get(`${api}`)
    .then(response => response)
    .then(data => {
        Dispatcher.dispatch({
            type: 'RECEIVE_INFO', 
            data: data.data
        })    
    })
}