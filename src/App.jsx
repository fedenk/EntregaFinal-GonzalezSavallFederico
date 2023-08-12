import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/components/Styles.scss';
import { NavBar } from './components/NavBar';
import { Contacto } from './components/Contacto';
import { ItemListContainer } from './components/ItemListContainer';
import { Inicio } from './components/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './contexto/CartContext';
import { CartView } from './components/CartView';
import { Footer } from './components/Footer';
import { Checkout } from './components/Checkout'

function App() {
  

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/productos/:categoryId" element={<ItemListContainer/>}></Route>
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
      <Route path="/cart" element={<CartView/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>  
    </>
  )
}

export default App
