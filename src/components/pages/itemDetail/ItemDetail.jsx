import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import { ProductCardDetail } from "../../common/productCardDetail/ProductCardDetail";


export const ItemDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
    console.log("la cantidad del producto es:" + data.quantity)
  };

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      {productSelected.stock > 0 ? (
        <ProductCardDetail elemento={productSelected} onAdd={onAdd} />
      ) : <h3>No hay stock</h3>}
    </div>
  );
};


