import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"

export const ProductCard = ({elemento}) => {
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
            <Link to={`/itemDetail/${elemento.id}`}><button className={styles.btnCard}>Ver Detalle</button></Link>
        </div>  
    </div>
  )
}
