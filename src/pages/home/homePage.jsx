import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavs, removeHandler } from "../../stores/actions"
import Card from "../../components/productCard/Card"
import './homePage.scss'



function Home(){
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.reducer.favorites)
    const favIds = favorites.map(p => p['id'])

    function addToFavsFunc(productInfo){
        dispatch(addToFavs(productInfo))
    }

    function removeHandlerFunc(productInfo){
        dispatch(removeHandler(productInfo))
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
                                            fhandler={()=>addToFavsFunc(info)}
                                            rhandler={()=>removeHandlerFunc(info)}
                                            cardType={favIds.includes(info['id']) ? 'selected' : 'notselected'}
                                            />)}
        </div>
    )
}

export default Home