import Header from "./components/header/Header";
import Home from "./pages/home/homePage";



function App() {
  return (   
    <>
      <Header trash={0} favourite={0}/>
      <Home/>
    </>
  );
}

export default App;
