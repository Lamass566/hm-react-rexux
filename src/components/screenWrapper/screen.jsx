import { useDispatch, useSelector } from "react-redux"
import {hideScreen } from '../../stores/actions'
import './screen.scss'

function Screen(){

    const form_status = useSelector(state => state.formReducer.form)
    const dispatch = useDispatch()

    const hideScreenFunc = () => {
        dispatch(hideScreen())
    }
    
    return(
        <div className={`screen ${form_status}`} onClick={hideScreenFunc}></div>
    )
}

export default Screen