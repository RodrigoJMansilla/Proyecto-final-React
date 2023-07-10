import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Cart } from "./Cart"
import Swal from "sweetalert2"


export const CartContainer = () => {
    const {cart, clearCart, removeById} = useContext(CartContext)

    const limpiar = ()=>{
      Swal.fire({
        title: 'Seguro quieres limpiar el carrito?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si, limpiar',
        denyButtonText: `No, cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart()
          Swal.fire('Carrito limpio', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('El carrito no se modificó', '', 'info')
        }
      })
    }

  return (
    <Cart cart={cart} limpiar={limpiar}/>
  )
}
