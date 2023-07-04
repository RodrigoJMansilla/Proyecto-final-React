import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Cart } from "./Cart"


export const CartContainer = () => {
    const {cart, clearCart, removeById} = useContext(CartContext)

    const limpiar = ()=>{
      clearCart()
    }

  return (
    <Cart cart={cart} limpiar={limpiar}/>
  )
}
