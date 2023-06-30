
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../../common/cartWidget/CartWidget"
import styles from "./Navbar.module.css"
import { menuNav } from "../../../routes/menuNav"

export const Navbar = ({contador}) => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.subNav}>
          <Link to="/">
            <h3 className={styles.logo}>Logo</h3>
          </Link>
            
          <div className={styles.contenedorBotones}>
            {menuNav.map(({ id, path, title }) => (
              <Link key={id} to={path} className={styles.botones}>
                {title}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/carrito">
          <CartWidget contador={contador}/>
        </Link>
        
    </nav>
  )
}


