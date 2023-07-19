
import { ItemList }   from '../components/ItemList';
import { useProductos } from '../hooks/useProductos';


export const ItemListContainer = ()=>{

    const { productos, loading} = useProductos()

 

    return(
        <div>
            {
                loading? <h2>Cargando...</h2> : <ItemList productos = {productos}/>
            }
            
        </div>
    )   
}