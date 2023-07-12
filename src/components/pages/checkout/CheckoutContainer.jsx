import { useFormik } from "formik";
import * as Yup from "yup";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let totalPrice = getTotalPrice();

  const navigate = useNavigate()

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        totalPrice: totalPrice,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => {
        setOrderId(res.id)
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Su compra fue exitosa, el numero de comprobante es: ${res.id} `,
          showConfirmButton: true,
          confirmButtonText: 'Volver al inicio'
        }).then( () => navigate("/"));
      })
      

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      


      
      clearCart();
      
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El telefono no cumple los requisitos"),
    }),
  });

  return (
    <div>
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
    </div>
  );
};

export default CheckoutContainer;
