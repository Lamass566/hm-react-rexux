import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../../stores/actions"
import Card from "../../components/productCard/Card"
import './homePage.scss'



function Home(){
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.reducer.favorites)
    const favIds = favorites.map(p => p['id'])


    const addToFavs = (productInfo) => {
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: productInfo
        })
    }

    const removeHandler = (productInfo) => {
        dispatch({
            type: REMOVE_FROM_FAVORITES,
            payload: productInfo
        })
    }

    

    useEffect(()=>{
        
        fetch('api/data.json').then((res)=>res.json()).then((data)=>{
            setProducts(data['products'])
         })
      },[])



    return(
        <div className="home">
                    {products.map(info => <Card
                                            thisCard={info}
                                            pageType={'home'}
                                            name={info['name']}
                                            price={info['price']}
                                            url={info['url']}
                                            key={info['id']}
                                            fhandler={()=>addToFavs(info)}
                                            rhandler={()=>removeHandler(info)}
                                            cardType={favIds.includes(info['id']) ? 'selected' : 'notselected'}
                                            />)}
        </div>
    )
}

export default Home