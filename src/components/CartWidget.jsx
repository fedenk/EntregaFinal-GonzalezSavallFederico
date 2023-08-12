import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexto/CartContext';

export const CartWidget = ()=>{

    const { totalCantidad } = useContext(CartContext)
    return(
        <Link to="/cart">
        <img className="cartImage"src="/carrito-de-compras.png"  alt="carrito" />
        <p className={totalCantidad()=== 0 ? 'cartNumber0' : 'cartNumber'}>{totalCantidad()}</p>
        </Link>
    )
}