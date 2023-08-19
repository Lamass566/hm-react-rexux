import { SHOW_FORM, HIDE_FORM } from "./actions"

const defaultState = {
    form: 'hide'
}

function formReducer(state=defaultState, action){
    switch(action.type){
        case SHOW_FORM:
            return {...state, form: 'show'}
        case HIDE_FORM:
            return {...state, form: 'hide'}
        default:
            return state
    }
}

export default formReducer