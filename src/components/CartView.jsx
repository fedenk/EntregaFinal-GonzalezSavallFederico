import { useContext } from 'react';
import { CartContext } from '../contexto/CartContext';
import { Link } from 'react-router-dom';


export const CartView = ()=>{
    const {cart, totalCompra, vaciarCarrito, removerDelCarrito} = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="empty_cart">Tu carrito está vacío 👻</h2>
                <hr/>
                <Link className="buttonir_comprar"to="/" >Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div>
            <h2 className="cart_title">Tu compra</h2>
            <hr />

            {
               cart.map((item) => (
                <div className="cart_card"key={item.id}>
                    <h3 className="cart_t">{item.nombre}</h3>
                    <img className='cart_img mx-auto'src={item.imagen} alt={item.nombre}/>
                    <p className="cart_p">Precio: ${item.precio * item.cantidad}</p>
                    <p className="cart_p">Precio unidad: ${item.precio}</p>
                    <p className="cart_p">Cantidad: {item.cantidad}</p>
                    <button className="eliminar_item"onClick={()=> removerDelCarrito(item.id)}>Eliminar Item</button>
                    <hr/>
                </div>

               ))
               
            }
            <div>
                <h4 className="cart_total">Total: ${totalCompra()}</h4>
                <button className="vaciar_carrito"onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link className="button_termcomp"to="/checkout">Terminar mi Compra</Link>
            </div>
        </div>
    )
}