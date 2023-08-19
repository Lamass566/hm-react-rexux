import { configureStore } from "@reduxjs/toolkit";
import reducer from "./favoriteReducer";
import formReducer from "./formReducer";
import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
	reducer,
  formReducer,
  cartReducer
})


const store = configureStore({
  reducer: rootReducer,
  devTools: true
})


export default store