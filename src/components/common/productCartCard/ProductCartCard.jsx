import { Button } from "@mui/material"
import styles from "./ProductCartCard.module.css"

export const ProductCartCard = ({producto}) => {
  return (
    <div className={styles.cartCard}>
      <div className={styles.contImg}>
        <img className={styles.foto} src={producto.img} alt={producto.title} />
      </div>
      <div className={styles.subCont}>
        <div className={styles.subCont1}>
          <h4 className={styles.texto}>{producto.title}</h4>
        </div>
        <div className={styles.subCont2}>
          <h4 className={styles.texto}>Cantidad: {producto.quantity}</h4>
        </div>
        <div className={styles.subCont3}>
          <h4 className={styles.texto}>${producto.price * producto.quantity}</h4>
        </div>
        <div className={styles.subCont4}>
          <Button  color="error" size="small" variant="contained">X</Button>
        </div>

      </div>

    </div>
  )
}
