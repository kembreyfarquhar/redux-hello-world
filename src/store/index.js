import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

export const updateMessage = (newMessage) => dispatch => {
    dispatch({type: UPDATE_MESSAGE, payload: newMessage});
}

let initState = {
    message: "Hello World"
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {message: action.payload}
        default:
            return state;
    }
}

export const store = createStore(reducer, applyMiddleware(thunk));