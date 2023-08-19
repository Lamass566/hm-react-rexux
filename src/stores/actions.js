export const ADD_TO_FAVORITES = 'ADD'
export const REMOVE_FROM_FAVORITES = 'REMOVE'
export const ADD_TO_CART = 'ADD_CART'
export const REMOVE_FROM_CART = 'REMOVE_CART'
export const SHOW_FORM = 'SHOW'
export const HIDE_FORM = 'HIDE'

export const hideScreen = () =>{
    return{
        type: HIDE_FORM
    }
}

export const showScreen = () =>{
    return{
        type: SHOW_FORM
    }
}