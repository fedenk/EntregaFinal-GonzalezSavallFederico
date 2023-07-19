import Nav from 'react-bootstrap/Nav';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    return (
        <Nav className="nav" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li" className="nav__li">
            <Link className="nav__li__1" to="/">Home</Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__li">
            <Link className="nav__li__1" eventKey="link-1" to="/productos/productos1">Productos 1</Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__li">
            <Link className="nav__li__1" eventKey="link-2" to="/contacto">Contacto</Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__img">
            <Link eventKey="link-2"><CartWidget number = {3}/></Link>
          </Nav.Item>
        </Nav>
      );
}