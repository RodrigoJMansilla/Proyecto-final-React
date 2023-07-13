import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { menuNav } from "../../../routes/menuNav";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h3 className={styles.logo}>Sessa</h3>
      </Link>
      <div className={styles.contenedorBotones}>
        {menuNav.map(({ id, path, title }) => (
          <Link key={id} to={path} className={styles.botones}>
            {title}
          </Link>
        ))}
      </div>
      <Link to="/carrito">
        <CartWidget totalItems={totalItems} />
      </Link>
    </nav>
  );
};
