import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "info");
      }
    });
  };

  const eliminar = (id) => {
    Swal.fire({
      title: "¿Seguro quieres eliminar el producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        removeById(id);
        Swal.fire("Producto Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito no se modificó", "", "info");
      }
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <Cart cart={cart} limpiar={limpiar} eliminar={eliminar} />
      ) : (
        <div style={{display:"flex", width:"100%", justifyContent:"center", padding:"50px", minHeight:"83.2vh"}}>
          <h3>
            No hay productos en su carrito.<Link to="/">Ir a comprar</Link>
          </h3>
        </div>
      )}
    </>
  );
};
