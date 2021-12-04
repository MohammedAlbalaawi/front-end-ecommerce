import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';


function App() {
  return (
    <>
      
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route exact path='/product/:id' element={<Product />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
        </Routes >
      
    </>
  );
}

export default App;
