import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import { ItemList } from "./ItemList"


export const ItemListContainer = () => {

  const [ items, setItems ] = useState([])

  useEffect ( ()=>{

    const tarea = new Promise ((resolve, reject) => {
      
      setTimeout(()=>{
        
        resolve( products )

      }, 3000)

    })

    tarea
    .then( res => setItems(res))
    .catch((err)=>{
      console.log("catch: ", err)
    })

  }, [])

  return (
    <div>
        <ItemList items={items} />
    </div>
  )
}

