import Card from "../../components/productCard/Card"
import { useDispatch, useSelector } from "react-redux"
import './favoritesPage.scss'
import { REMOVE_FROM_FAVORITES } from "../../stores/actions"

function Favorites(){

    const favorites = useSelector(state => state.reducer.favorites)
    const dispatch = useDispatch()
    
    const removeHandler = (productInfo) => {
        dispatch({
            type: REMOVE_FROM_FAVORITES,
            payload: productInfo
        })
    }

    return(
        <div className="favorites">
            {favorites.map(info => <Card
                                    pageType={"fav"}
                                    name={info['name']}
                                    price={info['price']}
                                    url={info['url']}
                                    key={info['id']}
                                    rhandler={()=> removeHandler(info)}
                                    cardType={'selected'}
                                    />)}
        </div>
    )
}

export default Favorites