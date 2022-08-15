import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import MailSender from './components/MailSender';
import AboutUs from './components/AboutUs';


function App() {
  return (
    <>
      
        <Navbar />
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/contact' element={<MailSender />} />
          <Route exact path='/about' element={<AboutUs />} />
        </Routes >
      
    </>
  );
}

export default App;
