import Nav from 'react-bootstrap/Nav';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import { ButtonBurguer } from './ButtonBurguer';
import { useState } from 'react';

export const NavBar = ()=>{
  
  const [ clicked, setClicked ] = useState(false);

  const handleClick = ()=>{
  setClicked(!clicked);
}
    return (
      <>
        <Nav className="header" defaultActiveKey="/home" as="ul">
          
            <Link className="nav_i" to="/"><h2>DharmaTools</h2></Link>
            <Link className="nav__img"><CartWidget/></Link>
          
            
          <div className={`nav ${ clicked ? 'active' : ''}`}>
          
            <Link className="nav__li" to="/productos/ferreteria">Ferreteria</Link>
            <Link className="nav__li" to="/productos/bazar">Bazar</Link>
            <Link className="nav__li" to="/productos/belleza">Belleza</Link>
            <Link className="nav__li" to="/productos/fitness">Fitness</Link>
          
          </div>
         
            <Link className="nav__burguer"><ButtonBurguer clicked = {clicked} handleClick= {handleClick}/></Link>
          
        </Nav>
        </>
      );
}