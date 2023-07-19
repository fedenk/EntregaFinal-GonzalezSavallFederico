
export const ItemDetail = ({item}) => {
 
    return (
        <div className="container my-5">
            <h2>{item.nombre}</h2>
            <img src={item.imagen} alt={item.nombre}/>
            <p>{item.marca}</p>
            <p>Precio: ${item.precio}</p>
            <button>Comprar</button>
        </div>
    )
}
