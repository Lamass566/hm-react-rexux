import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions"

const defaultState = {
    favorites: []
}

function reducer(state=defaultState, action){
    switch(action.type){
        case ADD_TO_FAVORITES:
            return {...state, favorites: [...state.favorites, action.payload]}
        default:
            return state
    }
}

export default reducer