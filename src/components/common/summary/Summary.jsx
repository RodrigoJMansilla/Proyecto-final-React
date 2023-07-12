import { Link } from "react-router-dom"
import Styles from "./Summary.module.css"


export const Summary = ({limpiar, getTotalPrice}) => {
    
    const classNames=`${Styles.bot} ${Styles.botRed}`
  
    return (
    <div className={Styles.cont}>
        <h3>
            El Total de su carrito es: ${getTotalPrice()}
        </h3>
        <div className={Styles.contBot}>
            <button className={classNames} onClick={()=>limpiar()}>Limpiar Carrito</button>
            <Link to="/checkout"><button className={Styles.bot}>Finalizar Compra</button></Link>
        </div>

    </div>
  )
}
