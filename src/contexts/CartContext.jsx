import React, { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={"This is the cart context"}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
