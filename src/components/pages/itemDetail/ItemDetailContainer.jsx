import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { id } = useParams()

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
    console.log("la cantidad del producto es:" + data.quantity)
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

  console.log(productSelected)

  return <ItemDetail productSelected={productSelected} onAdd={onAdd}  />;
};


