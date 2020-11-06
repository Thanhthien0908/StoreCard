
import * as types from './../constants/actionTypes';
import * as Mesage from './../constants/Message';
var initialState = Mesage.MSG_WELCOME;
const message = (state = initialState, action) =>{

    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
        default: 
        return state;
    }
}

export default message;