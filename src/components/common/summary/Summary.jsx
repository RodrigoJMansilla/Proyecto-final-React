import Styles from "./Summary.module.css"


export const Summary = ({clearCart, getTotalPrice}) => {
    
    const classNames=`${Styles.bot} ${Styles.botRed}`
  
    return (
    <div className={Styles.cont}>
        <h2>
            El Total de su carrito es: ${getTotalPrice()}
        </h2>
        <div className={Styles.contBot}>
            <button className={classNames} onClick={()=>clearCart()}>Limpiar Carrito</button>
            <button className={Styles.bot}>Finalizar Compra</button>
        </div>

    </div>
  )
}
