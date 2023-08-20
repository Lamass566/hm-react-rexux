export const ADD_TO_FAVORITES = 'ADD'
export const REMOVE_FROM_FAVORITES = 'REMOVE'
export const ADD_TO_CART = 'ADD_CART'
export const REMOVE_FROM_CART = 'REMOVE_CART'
export const SHOW_FORM = 'SHOW'
export const HIDE_FORM = 'HIDE'

export const get_posts2 = 'get_posts2'

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


  
//   fetch('api/data.json').then((res)=>res.json()).then((data)=>{
//     setProducts(data['products'])
//  })