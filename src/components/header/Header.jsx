import './Header.scss'
import {Link} from "react-router-dom"
import Cart from "../../assets/cartSVG/Basket.jsx"
import Star from "../../assets/starSVG/Star"
import { useSelector } from "react-redux"

function Header(){
    const favorites = useSelector(state => state.reducer.favorites)
    const tempArr = [...favorites]

    const carts = useSelector(state => state.cartReducer.cart)
    const tempArrCart = [...carts]
    return(
        <div className="header">
            <div className='flex'>
                <div className="icons-container">
                    <span>
                        <Cart/>
                        <p className='p'>{tempArrCart.length}</p>
                    </span>
                    <span>
                        <Star />
                        <p className='p'>{tempArr.length}</p>
                    </span>
                </div>

                <div className="router-link-flex">
                    <Link className='routerLink' to="/">Home</Link>
                    <Link className='routerLink' to="/cart">Cart</Link>
                    <Link className='routerLink' to="/favourite">Favourite</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;