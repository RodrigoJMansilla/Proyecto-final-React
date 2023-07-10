import Styles from "./Summary.module.css"


export const Summary = ({limpiar, getTotalPrice}) => {
    
    const classNames=`${Styles.bot} ${Styles.botRed}`
  
    return (
    <div className={Styles.cont}>
        <h2>
            El Total de su carrito es: ${getTotalPrice()}
        </h2>
        <div className={Styles.contBot}>
            <button className={classNames} onClick={()=>limpiar()}>Limpiar Carrito</button>
            <button className={Styles.bot}>Finalizar Compra</button>
        </div>

    </div>
  )
}
