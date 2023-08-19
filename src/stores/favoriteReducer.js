import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions"

const items = localStorage.getItem('Favorites')

const defaultState = items ? JSON.parse(items) : {favorites: []}

function reducer(state=defaultState, action){
    let newState;
    switch(action.type){
        case ADD_TO_FAVORITES:
            newState =  {...state, favorites: [...state.favorites, action.payload]}
            localStorage.setItem('Favorites', JSON.stringify(newState))
            return newState
        case REMOVE_FROM_FAVORITES:
            const newFavs = state.favorites.filter(product => action.payload['id'] !== product['id'])
            newState = {...state, favorites:[...newFavs]}
            localStorage.setItem('Favorites', JSON.stringify(newState))
            return newState
        default:
            return state
    }
}

export default reducer