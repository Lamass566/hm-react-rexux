import Card from "../../components/productCard/Card"
import { useDispatch, useSelector } from "react-redux"
import './favoritesPage.scss'
import { removeHandler } from "../../stores/actions"

function Favorites(){

    const favorites = useSelector(state => state.reducer.favorites)
    const dispatch = useDispatch()
    
    function removeHandlerFunc(productInfo){
        dispatch(removeHandler(productInfo))
    }

    return(
        <div className="favorites">
            {favorites.map(info => <Card
                                    pageType={"fav"}
                                    name={info['name']}
                                    price={info['price']}
                                    url={info['url']}
                                    key={info['id']}
                                    rhandler={()=> removeHandlerFunc(info)}
                                    cardType={'selected'}
                                    />)}
        </div>
    )
}

export default Favorites