import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions"

const items = localStorage.getItem('Cart')

const defaultState = items ? JSON.parse(items) : {cart: []}

function cartReducer(state=defaultState, action){
    let newState;
    switch(action.type){
        case ADD_TO_CART:
            newState =  {...state, cart: [...state.cart, action.payload]}
            localStorage.setItem('Cart', JSON.stringify(newState))
            return newState
        case REMOVE_FROM_CART:
            const newFavs = state.cart.filter(product => action.payload['id'] !== product['id'])
            newState = {...state, cart:[...newFavs]}
            localStorage.setItem('Cart', JSON.stringify(newState))
            return newState
        default:
            return state
    }
}

export default cartReducer