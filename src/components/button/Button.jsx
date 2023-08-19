
import './Button.scss';
import PropTypes from 'prop-types';
import { ADD_TO_CART,REMOVE_FROM_CART } from '../../stores/actions';
import { useDispatch, useSelector } from "react-redux"

function Button({children, bg, display, type, closeModal}){

    const carts = useSelector(state => state.cartReducer.cart)
    const cartsIds = carts.map(p => p['id'])
   
    const dispatch = useDispatch();

    function addToCart(productInfo){
        dispatch({
            type: ADD_TO_CART,
            payload: productInfo
        })
        
       
    }

    function removeHandlerCart(productInfo){
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productInfo
        })
    }
    
    function clickHandler(){
        let data = localStorage.getItem('tempData')
        let tempObj = data;
        let s = JSON.parse(tempObj)
        
        if(type === 'ADD'){
            if(!cartsIds.includes(s["id"]))
                addToCart(JSON.parse(data))
                closeModal()
        }else 
            if(type === 'REMOVE'){
                removeHandlerCart(JSON.parse(data))
                closeModal()
        }else{
            closeModal()
        }
    }

    
    return(
        <>
        <button className='mainButton' style={{backgroundColor: bg, display: display}} onClick={clickHandler}>{children}</button>        
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button