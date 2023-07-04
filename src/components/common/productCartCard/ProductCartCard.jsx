import styles from "./ProductCartCard.module.css"

export const ProductCartCard = ({producto}) => {
  return (
    <div className={styles.cartCard}>
        <img className={styles.foto} src={producto.img} alt={producto.title} />
        <h4 className={styles.texto}><strong>{producto.title}</strong></h4>
        <h4 className={styles.texto}>{producto.quantity}</h4>
        <h4 className={styles.texto}>{producto.price * producto.quantity}</h4>
        <button>X</button>
    </div>
  )
}
