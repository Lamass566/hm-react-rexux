import { useDispatch, useSelector } from "react-redux"
import { hideScreen } from '../../stores/actions'
import './Modal.scss'
import PropTypes from 'prop-types'


function Modal({header, text, children, bg, bgHeader})
{

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const form_status = useSelector(state => state.formReducer.form)
    const dispatch = useDispatch()

    const hideScreenFunc = () => {
        dispatch(hideScreen())
    }

    return(
        <>
        <form className={`form ${form_status}`} onSubmit={handleSubmit} style={{backgroundColor: bg}}>
            <div className="header" style={{backgroundColor: bgHeader}}>
                <div className="flex">
                    {header}
                    <span className="closeX" onClick={hideScreenFunc}>X</span>
                </div>
            </div>
            <div className="body">
                <p className="body_text">{text}</p>
                <div className='buttons'>
                    {children}
                </div>

            </div>
           
        </form>
        </>
    )
}

Modal.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string,
    closeButton: PropTypes.string,
    state: PropTypes.string,
    bg: PropTypes.string,
    bgHeader: PropTypes.string
}



export default Modal