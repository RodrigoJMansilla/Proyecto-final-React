import { ProductCardDetail } from "../../common/productCardDetail/ProductCardDetail";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "85vh" }}>
      <ProductCardDetail elemento={productSelected} onAdd={onAdd} />
    </div>
  );
};
