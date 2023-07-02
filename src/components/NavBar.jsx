import Nav from 'react-bootstrap/Nav';
import { CartWidget } from './CartWidget';

export const NavBar = ()=>{
    return (
        <Nav className="nav" defaultActiveKey="/home" as="ul">
          <Nav.Item as="li" className="nav__li">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__li">
            <Nav.Link eventKey="link-1">Catalogo</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__li">
            <Nav.Link eventKey="link-2">Contacto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li" className="nav__img">
            <Nav.Link eventKey="link-2"><CartWidget number = {3}/></Nav.Link>
          </Nav.Item>
        </Nav>
      );
}