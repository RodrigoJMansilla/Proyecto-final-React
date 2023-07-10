import { useContext } from "react"
import { Summary } from "./Summary"
import { CartContext } from "../../../context/CartContext"


export const SummaryContainer = ({limpiar}) => {

    const {getTotalPrice}=useContext(CartContext)

  return (
    <Summary limpiar={limpiar} getTotalPrice={getTotalPrice} />
  )
}
