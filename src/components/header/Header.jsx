import './Header.scss'
import {Link} from "react-router-dom"
import Cart from "../../assets/cartSVG/Basket.jsx"
import Star from "../../assets/starSVG/Star"


function Header({trash, favourite}){

    return(
        <div className="header">
            <div className='flex'>
                <div className="icons-container">
                    <span>
                        <Cart/>
                        <p className='p'>{trash}</p>
                    </span>
                    <span>
                        <Star />
                        <p className='p'>{favourite}</p>
                    </span>
                </div>

                <div className="router-link-flex">
                    {/* <Link className='routerLink' to="/">Home</Link>
                    <Link className='routerLink' to="/cart">Cart</Link>
                    <Link className='routerLink' to="/favourite">Favourite</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Header;