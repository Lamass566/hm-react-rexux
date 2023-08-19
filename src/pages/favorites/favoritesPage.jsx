import Card from "../../components/productCard/Card"
import { useSelector } from "react-redux"

function Favorites(){

    const favorites = useSelector(state => state.favorites)
    console.log(favorites)

    return(
        <div className="favorites">
            {favorites.map(info => <Card
                                    key={info['id']}/>)}
        </div>
    )
}

export default Favorites