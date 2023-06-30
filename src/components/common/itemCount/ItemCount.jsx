import styles from "./ItemCount.module.css"

export const ItemCount = ({ count, decrement, increment, onAdd }) => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.subCont}>
          <button className={styles.btnCard}  onClick={decrement}>-</button>
          <span className={styles.contador}>{count}</span>
          <button className={styles.btnCard} onClick={increment}>+</button>
        </div>
        <button className={styles.btnCard} onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};
