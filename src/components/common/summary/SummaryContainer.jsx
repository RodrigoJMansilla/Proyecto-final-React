import { useContext } from "react"
import { Summary } from "./Summary"
import { CartContext } from "../../../context/CartContext"


export const SummaryContainer = () => {

    const {clearCart, getTotalPrice}=useContext(CartContext)

  return (
    <Summary clearCart={clearCart} getTotalPrice={getTotalPrice} />
  )
}
