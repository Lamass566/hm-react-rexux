import Header from "./components/header/Header";
import Home from "./pages/home/homePage";
import Favorites from "./pages/favorites/favoritesPage";
import { Route,Routes } from "react-router";


function App() {
  return (   
    <>
      <Header trash={0} favourite={0}/>

      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="favourite" element={<Favorites/>}/>
        </Route>
      </Routes>

    </>
  );
}

export default App;
