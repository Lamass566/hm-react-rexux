import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_TO_FAVORITES } from "../../stores/actions"
import Card from "../../components/productCard/Card"
import './homePage.scss'

function Home(){
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    const addToFavs = (productInfo) => {
        dispatch({
            type: ADD_TO_FAVORITES,
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
                                    id={info['id']}
                                    name={info['name']}
                                    price={info['price']}
                                    url={info['url']}
                                    key={info['id']}
                                    fhandler={()=>addToFavs(info)}/>)}
        </div>
    )
}

export default Home