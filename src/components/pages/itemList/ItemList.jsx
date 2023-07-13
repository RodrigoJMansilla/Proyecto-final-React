import { ProductCard } from "../../common/productCard/ProductCard";

export const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "space-around",
        minHeight: "83.2vh",
      }}
    >
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};
