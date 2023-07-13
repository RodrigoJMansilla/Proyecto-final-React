import styles from "./ItemCount.module.css";

export const ItemCount = ({ count, decrement, increment, onAdd }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subCont}>
          <button className={styles.btnCardOp} onClick={decrement}>
            -
          </button>
          <span className={styles.contador}>{count}</span>
          <button className={styles.btnCardOp} onClick={increment}>
            +
          </button>
        </div>
        <button className={styles.btnCardOp} onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
