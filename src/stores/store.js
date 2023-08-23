import { configureStore } from "@reduxjs/toolkit";
import reducer from "./favoriteReducer";
import formReducer from "./formReducer";
import fetchReducer from "./fetchReducer";
import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
	reducer,
  formReducer,
  cartReducer,
  fetchReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true
})


export default store