import { ItemCountContainer } from "../itemCount/ItemCountContainer"
import styles from "../productCardDetail/ProductCardDetail.module.css"

export const ProductCardDetail = ({elemento, onAdd}) => {
  return (
    <div key={elemento.id} className={styles.card}>
        <div style={{width:"50%", display:"flex", justifyContent:"center"}}>
            <img className={styles.imgCard} src={elemento.img} alt={elemento.title} />
        </div>
        
        <div className={styles.segCont}>
            <h4 className={styles.tituloCard}>{elemento.title}</h4>
            <div className={styles.miniCont}>
                <p className={styles.precioCard}>
                    Precio: ${elemento.price}
                </p>

                <p className={styles.precioCard}>
                    Categoria: {elemento.category}
                </p>
                
                <p className={styles.precioCard}>
                    Stock: {elemento.stock}
                </p>
                <ItemCountContainer stock={elemento.stock} initial={1} onAdd={onAdd} />
            </div>

        </div>  
    </div>
  )
}