
import { Link } from 'react-router-dom';

export const ItemCount = ({max,counter,setCounter,agregar,alerta})=>{

    const handleRestar = ()=>{
       counter > 1 && setCounter(counter-1)
    }

    const handleSumar = ()=>{
       counter < max && setCounter(counter+1)
    }

    return(
        <div className="mx-auto">
        <button className="button_c_card" onClick={handleRestar}>-</button>
        <span className="card_n_p">{counter}</span>
        <button className="button_c_card" onClick={handleSumar}>+</button>
        {
        max !== 0?
        <div>
        <button className="button_id_card" onClick={()=>{
            agregar()
            alerta()}}>Comprar</button>
        </div>
        :
        <div>
        <Link to="/" ><button className="button_id_card2">volver a inicio</button></Link>
        </div>
        }
    </div>
    )
}