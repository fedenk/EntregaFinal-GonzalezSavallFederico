
import { ItemList }   from '../components/ItemList';
import { useProductos } from '../hooks/useProductos';
import { Loader } from '../components/Loader'

export const ItemListContainer = ()=>{

    const { productos, loading} = useProductos()

 

    return(
        <div>
            {
                loading? <Loader/> : <ItemList productos = {productos}/>
            }
            
        </div>
    )   
}