import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { ClockLoader } from "react-spinners";


export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, cart } = useContext(CartContext);

  const { id } = useParams();

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: false,
      timer: 1000,
    });

    addToCart(data);
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelected({ ...res.data(), id: res.id });
    });
  }, [id]);

  
  return (
    <>
      {productSelected.id ? (
        <ItemDetail productSelected={productSelected} onAdd={onAdd} />
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <ClockLoader color="#403761" size="100px" />
        </div>
      )}
    </>
  );
};


