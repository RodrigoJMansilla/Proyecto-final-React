import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    let exist = isInCart(newProduct.id);

    if (exist) {
      let newArray = cart.map((prod) => {
        if (prod.id === newProduct.id) {
          return { ...prod, quantity: newProduct.quantity };
        } else {
          return prod;
        }
      });
      setCart(newArray)
    } else{
        setCart([...cart, newProduct])
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () =>{
    setCart([])
  }

  const removeById = (id)=> {
    let newArray = cart.filter( (product)=> product.id !== id )
    setCart(newArray)
  }

  const getTotalQuantityById = (id)=>{
    let producto = cart.find( prod => prod.id === +id )
    console.log(producto?.quantity)
    return producto?.quantity
  } 

  const getTotalItems = ( )=>{

    let total = cart.reduce( (acc, elemento)=> {
      return acc + elemento.quantity
    }, 0)
    return total
  }

  const getTotalPrice = ()=>{

    let total = cart.reduce( (acc, elemento)=>{
      return acc + ( elemento.quantity * elemento.price)
    }, 0 )
    return total
  }

  const data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice
  }

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
