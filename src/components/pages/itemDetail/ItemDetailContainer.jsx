import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";


export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const {addToCart, cart} = useContext(CartContext)

  const { id } = useParams()

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto agregado exitosamente',
      showConfirmButton: false,
      timer: 1000
    })

    addToCart(data)


  };


  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res, rej) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);



  return <ItemDetail productSelected={productSelected} onAdd={onAdd}  />;
};


