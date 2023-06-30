import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

  const [ items, setItems ] = useState([])

  const { categoryName } = useParams();

  useEffect ( ()=>{

    const tarea = new Promise ((resolve, reject) => {


      let filtro = products.filter(
        (product) => product.category === categoryName
      );
      
      setTimeout(()=>{
        
        resolve( categoryName ? filtro : products )

      }, 1000)

    })

    tarea
    .then( res => setItems(res))
    .catch((err)=>{
      console.log("catch: ", err)
    })

  }, [categoryName])

  return (
    <div>
        <ItemList items={items} />
    </div>
  )
}

