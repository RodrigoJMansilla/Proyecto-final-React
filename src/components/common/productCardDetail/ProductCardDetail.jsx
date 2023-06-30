import { ItemCountContainer } from "../itemCount/ItemCountContainer"
import styles from "../productCard/ProductCard.module.css"

export const ProductCardDetail = ({elemento, onAdd}) => {
  return (
    <div key={elemento.id} className={styles.card}>
        <img className={styles.imgCard} src={elemento.img} alt={elemento.title} />
        <div className={styles.segCont}>
            <h4 className={styles.tituloCard}>{elemento.title}</h4>
            <div className={styles.miniCont}>
                <p className={styles.precioCard}>
                    Precio: ${elemento.price}
                </p>
                
                <p className={styles.precioCard}>
                    Stock: {elemento.stock}
                </p>
            </div>
            <ItemCountContainer stock={elemento.stock} initial={1} onAdd={onAdd} />
            {/* Falta pasar onAdd a item count */}
        </div>  
    </div>
  )
}