import { ItemCard } from '../components/ItemCard';

export const ItemList = ({productos})=>{

    return(
        <div className= 'container'>
            <h2 className="h2_catalogo">Catálogo</h2>

            <div className= 'row'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}