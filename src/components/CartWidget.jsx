export const CartWidget = (props)=>{
    return(
        <div>
        <img className="cartImage"src="/carrito-de-compras.png"  alt="carrito" />
        <p className="cartNumber">{props.number}</p>
        </div>
    )
}