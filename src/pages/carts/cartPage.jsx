import Card from "../../components/productCard/Card"
import PurchaseForm from "../../components/purchaseForm/purchaseForm"
import { useSelector } from "react-redux"
import './cartPage.scss'
import { Context } from "../../Context"
import { useContext } from "react"

function Carts(){

    const carts = useSelector(state => state.cartReducer.cart)

    const {table} = useContext(Context)

    return(
        <>
        {
            carts[0] !== undefined
            ? <PurchaseForm />
            : <div></div>        
        }
        
        <div className="carts">
        
             {carts.map(info => <Card
                                     isTable={table}
                                     thisCard={info}
                                     pageType={"cart"}
                                     name={info['name']}
                                     price={info['price']}
                                     url={info['url']}
                                     key={info['id']}
                                     cardType={'selected'}
                                     />)}
         </div>
         </>
        
    )
}

export default Carts