import { useEffect, useState } from "react"
import { pedirDatos } from '../components/helpers/pedirDatos';
import { useParams } from 'react-router-dom';


export const useProductos = () =>{
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading] = useState(true)

    const {categoryId} = useParams();

    useEffect ( ()=>{
        setLoading(true)

        pedirDatos()
        .then(r => {
            if(categoryId){
                setProductos( r.filter(prod => prod.category === categoryId))
            } else{
                setProductos(r)
            }
    })
        .catch(e => console.log(e))
        .finally(()=>{
            setLoading(false)
        })
}, [categoryId])

   return { productos, loading }
}