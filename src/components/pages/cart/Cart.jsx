
import { ProductCartCard } from "../../common/productCartCard/ProductCartCard"

export const Cart = ({cart, limpiar}) => {
  return (
    <>
      {
        cart.map( (prod)=>{
          return( 
                  <div key={prod.id}> 
                    <ProductCartCard producto={prod} />
                  </div>
                )
        })
      }
    </>
  )
}
