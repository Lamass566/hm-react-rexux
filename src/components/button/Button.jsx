
import './Button.scss';
import PropTypes from 'prop-types';
import { addToCart, removeHandlerCart } from '../../stores/actions';
import { useDispatch, useSelector } from "react-redux"

function Button({children, bg, display, type, closeModal}){

    const carts = useSelector(state => state.cartReducer.cart)
    const cartsIds = carts.map(p => p['id'])
   
    const dispatch = useDispatch();

    function addToCartFunc(productInfo){
        dispatch(addToCart(productInfo))
    }

    function removeHandlerFunc(productInfo){
        dispatch(removeHandlerCart(productInfo))
    }

    
    function clickHandler(){
        let data = localStorage.getItem('tempData')
        let tempObj = data;
        let s = JSON.parse(tempObj)
        
        if(type === 'ADD'){
            if(!cartsIds.includes(s["id"]))
                addToCartFunc(JSON.parse(data))
                closeModal()
        }else 
            if(type === 'REMOVE'){
                removeHandlerFunc(JSON.parse(data))
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