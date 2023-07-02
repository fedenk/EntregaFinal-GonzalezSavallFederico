import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/components/Styles.scss';
import { NavBar } from './components/NavBar';
import { Contenedor } from './components/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Contenedor titulo="PRIMER PRE ENTREGA"/> 
    </>
  )
}

export default App
