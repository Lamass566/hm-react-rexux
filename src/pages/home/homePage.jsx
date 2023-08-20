import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavs, removeHandler } from "../../stores/actions"
import Card from "../../components/productCard/Card"
import './homePage.scss'
import { fetchData } from "../../stores/fetchReducer"


function Home(){
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.reducer.favorites)
    const favIds = favorites.map(p => p['id'])

    const data = useSelector((state) => state.prodSlice.datas)
    console.log(data)

    function addToFavsFunc(productInfo){
        dispatch(addToFavs(productInfo))
    }

    function removeHandlerFunc(productInfo){
        dispatch(removeHandler(productInfo))
    }


    useEffect(()=>{
        dispatch(fetchData())
      },[dispatch])


    return(
        <div className="home">
                    {data.map(info => <Card
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