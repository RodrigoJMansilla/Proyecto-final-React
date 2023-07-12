import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      // los filtrados
      consulta = query(itemCollection, where("category", "==", categoryName))
    } else {
      // todos
      consulta = itemCollection
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
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
    </div>
  );
};
