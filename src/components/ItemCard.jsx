import { Link } from 'react-router-dom';

export const ItemCard = ({item})=>{
    return(
        <div className = 'card col-lg-4 mx-auto'>
                            <h3 className='card_text'>{item.nombre}</h3>
                            <img className= 'img_card mx-auto' src={item.imagen} alt={item.nombre} />
                            <p className="card_p">Marca: {item.marca}</p>
                            <p className="card_p">Precio: ${item.precio}</p>
                            <Link to= {`/detail/${item.id}`}className='button_card mx-auto'>Ver Mas</Link>
                        </div>
    )
}