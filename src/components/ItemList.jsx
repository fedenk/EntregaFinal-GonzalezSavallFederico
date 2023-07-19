import { ItemCard } from '../components/ItemCard';

export const ItemList = ({productos})=>{

    return(
        <div className= 'container'>
            <h2>Catálogo</h2>
            <hr />

            <div className= 'row'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}