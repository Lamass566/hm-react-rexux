import Card from "../../components/productCard/Card"
import { useSelector } from "react-redux"
import './cartPage.scss'

function Carts(){

    const carts = useSelector(state => state.cartReducer.cart)


    return(
        <div className="carts">
            {carts.map(info => <Card
                                    thisCard={info}
                                    pageType={"cart"}
                                    name={info['name']}
                                    price={info['price']}
                                    url={info['url']}
                                    key={info['id']}
                                    cardType={'selected'}
                                    />)}
        </div>
    )
}

export default Carts