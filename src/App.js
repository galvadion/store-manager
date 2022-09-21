import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Categories from './components/categories/categories';
import {List as ProductList} from './components/products/list';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Categories/>}/>
        <Route path={"/products"} element={<ProductList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
