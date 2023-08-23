import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { object, string, number } from "yup"
import '../../components/purchaseForm/purchaseForm.scss'
import { buyProduct } from "../../stores/actions"


const validationSchema = object().shape({
    firstName: string().required("Please enter a first name").matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
    lastName: string().required("Please enter a last name").matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
    age: number().required("Please enter an age").typeError('The field should have digits only'),
    adress: string().required("Please enter an adress").matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
    phone: string().required("Please enter a phone").matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field'),
})

function PurchaseForm(){
    
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart)

    function buyProductFunc(){
        dispatch(buyProduct())
    }

    function showInfoAboutPurchasedProducts(values){
        cart.map(info => (
            console.log(`Purchased Products: ${info.name}`)
        ))
        console.log(`Your info: ${values.firstName}|-|${values.lastName}|-|${values.age}`)
        buyProductFunc()
    }


    return(
        <Formik
            initialValues={{firstName:'', lastName: '', age: '', adress: '', phone: ''}} 
            onSubmit={showInfoAboutPurchasedProducts}
            validationSchema={validationSchema}
            >
            <Form >
                <ul className="form-flex">
                    <li className="field-flex">
                        <Field className="field" type="text" name="firstName" placeholder="First Name"/>
                        <ErrorMessage name="firstName" component="p"/>
                    </li>
                    <li className="field-flex">
                        <Field className="field" type="text" name="lastName" placeholder="Last Name"/>   
                        <ErrorMessage name="lastName" component="p"/>
                    </li>
                    <li className="field-flex">
                        <Field className="field" type="text" name="age" placeholder="Age"/>   
                        <ErrorMessage name="age" component="p"/>
                    </li>
                    <li className="field-flex">
                        <Field className="field" type="text" name="adress" placeholder="Adress"/>
                        <ErrorMessage name="adress" component="p"/>
                    </li>
                    <li className="field-flex">
                        <Field className="field" type="text" name="phone" placeholder="Phone"/>
                        <ErrorMessage name="phone" component="p"/>
                    </li>
                </ul>

                <button className="form-btn" type="submit">Checkout</button>
            </Form>

        </Formik>
    )
}

export default PurchaseForm