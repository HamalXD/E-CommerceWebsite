import React, { createContext, useState, useEffect } from "react";

// creating context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);

  //Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
