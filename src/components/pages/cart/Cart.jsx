import { ProductCartCard } from "../../common/productCartCard/ProductCartCard";
import { SummaryContainer } from "../../common/summary/SummaryContainer";
import styles from "./Cart.module.css";

export const Cart = ({ cart, limpiar, eliminar }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.contItems}>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              <ProductCartCard producto={prod} eliminar={eliminar} />
            </div>
          );
        })}
      </div>
      <div className={styles.contSum}>
        <SummaryContainer limpiar={limpiar} />
      </div>
    </div>
  );
};
