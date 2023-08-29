import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToFavs, removeHandler } from "../../stores/actions"
import Card from "../../components/productCard/Card"
import './homePage.scss'
import { fetchData } from "../../stores/actions"
import { Context } from "../../Context"


function Home(){
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.reducer.favorites)
    const favIds = favorites.map(p => p['id'])

    const data = useSelector((state) => state.fetchReducer.datas)

    function addToFavsFunc(productInfo){
        dispatch(addToFavs(productInfo))
    }

    function removeHandlerFunc(productInfo){
        dispatch(removeHandler(productInfo))
    }


    useEffect(()=>{
        dispatch(fetchData())
      },[dispatch])

   const {table, setTable} = useContext(Context)

    const change = () =>{
        setTable(table => !table)
        console.log(table)
    }

    return(
        <>
        <button onClick={change}>Table format</button>
        <div className="home">
                    {data.map(info => <Card
                                            isTable={table}
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
        </>
    )
}

export default Home