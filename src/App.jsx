import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/components/Styles.scss';
import { NavBar } from './components/NavBar';
import { Contacto } from './components/Contacto';
import { ItemListContainer } from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}></Route>
      <Route path="/productos/:categoryId" element={<ItemListContainer/>}></Route>
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
      <Route path="/contacto" element={<Contacto/>}></Route>
    </Routes>
      
      
    </BrowserRouter>
      
    </>
  )
}

export default App
