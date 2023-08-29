import Header from "./components/header/Header";
import Home from "./pages/home/homePage";
import Favorites from "./pages/favorites/favoritesPage";
import { Route,Routes } from "react-router";
import Screen from "./components/screenWrapper/screen";
import Carts from "./pages/carts/cartPage";
import { Context } from "./Context";
import { useState } from "react";

function App() {
  const [table, setTable] = useState(false);
  return (   
    <>
      <Header />

      <Routes>
          <Route path="/" element={
            <Context.Provider value={{table, setTable}}>
              <Home/>
            </Context.Provider>
          }/>
          <Route path="favourite" element={
            <Context.Provider value={{table}}>
              <Favorites/>
            </Context.Provider>
          }/>
          <Route path="cart" element={
            <Context.Provider value={{table}}>
              <Carts/>
            </Context.Provider>
          }/>

      </Routes>

      <Screen/>
    </>
  );
}

export default App;
