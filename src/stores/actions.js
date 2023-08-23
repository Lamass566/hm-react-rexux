export const ADD_TO_FAVORITES = 'ADD'
export const REMOVE_FROM_FAVORITES = 'REMOVE'
export const ADD_TO_CART = 'ADD_CART'
export const REMOVE_FROM_CART = 'REMOVE_CART'
export const SHOW_FORM = 'SHOW'
export const HIDE_FORM = 'HIDE'
export const BUY_PRODUCT = 'BUY_PRODUCT'

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

export const setData = (productInfo) =>{
    return{
        type: "SET_USERS",
        payload: productInfo
    }
}

export const fetchData = () =>{
    return(dispatch)=>{
          fetch('api/data.json')
          .then((res)=>res.json())
          .then((data)=>{dispatch(setData(data['products']))
        })
    }
}

export const addToFavs = (productInfo) => {
    return{
        type: ADD_TO_FAVORITES,
        payload: productInfo
    }
}

export const removeHandler = (productInfo) => {
    return{
        type: REMOVE_FROM_FAVORITES,
        payload: productInfo
    }
}

export const addToCart = (productInfo) => {
    return{
        type: ADD_TO_CART,
        payload: productInfo
    }
}

export const removeHandlerCart = (productInfo) => {
    return{
        type: REMOVE_FROM_CART,
        payload: productInfo
    }
}

export const buyProduct = () => {
    return{
        type: BUY_PRODUCT
    }
}
