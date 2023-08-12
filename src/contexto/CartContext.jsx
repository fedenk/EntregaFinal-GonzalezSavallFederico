import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState(init)

    const agregarAlCarrito = producto => {
      if(cart.find(item => item.id === producto.id)){
        const productos = cart.map( item => item.id === producto.id
          ?{...item, cantidad: item.cantidad + producto.cantidad}
          : item);
          return setCart([...productos])
      }
    setCart( [...cart, producto] )
  }


  const removerDelCarrito = (id) =>{
    setCart(cart.filter((item) => item.id !== id))
  }

  const totalCompra = () =>{
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  }

  const totalCantidad = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const vaciarCarrito = () =>{
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            removerDelCarrito,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}