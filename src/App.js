import Header from "./components/header/Header";
import Home from "./pages/home/homePage";
import Favorites from "./pages/favorites/favoritesPage";
import { Route,Routes } from "react-router";
import Screen from "./components/screenWrapper/screen";
import Carts from "./pages/carts/cartPage";

function App() {
  return (   
    <>
      <Header />

      <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="favourite" element={<Favorites/>}/>
          <Route path="cart" element={<Carts/>}/>

      </Routes>

      <Screen/>
    </>
  );
}

export default App;
