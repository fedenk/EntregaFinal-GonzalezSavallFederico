import { useContext, useState} from 'react';
import { CartContext } from '../contexto/CartContext';
import { ItemCount } from './ItemCount';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ItemDetail = ({item}) => {

    const notify = () => toast.success('🎉 Producto agregado al carrito!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    const { agregarAlCarrito } = useContext(CartContext)

    const [ cantidad, setCantidad ] = useState(1)

    const handleAgregar = ()=>{
        const newItem = {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }

  
    
 
    return (
        <div className="container my-5 card">
            <h2 className="card_text mx-auto">{item.nombre}</h2>
            <img className="img_card mx-auto" src={item.imagen} alt={item.nombre}/>
            <p className="card_p">{item.marca}</p>
            {
                item.stock === 0 && <p className="card_p_0">No hay stock disponible</p>
            }

            <p className="card_p">Precio: ${item.precio}</p>
            <ItemCount 
            max={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            agregar={handleAgregar}
            alerta={notify}
            />
            <ToastContainer />
        </div>
        
    )
}
