import { ItemCountContainer } from "../../common/itemCount/ItemCountContainer";
import { ProductCardDetail } from "../../common/productCardDetail/ProductCardDetail";


export const ItemDetail = ({ productSelected, onAdd }) => {


  return (
    <div style={{display:"flex", justifyContent:"center", height:"85vh"}}>
      {productSelected.stock > 0 ? (
        <ProductCardDetail elemento={productSelected} onAdd={onAdd} />
      ) : <h3>No hay stock</h3>}
    </div>
  );
};


