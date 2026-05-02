import React, { createContext, useState, useContext } from 'react';
import { productos as dataInicial } from '../data/productos';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // --- LOS HOOKS SIEMPRE VAN AQUÍ ADENTRO ---
  const [cart, setCart] = useState([]);
  const [listaProductos, setListaProductos] = useState(dataInicial);
  const [usuario, setUsuario] = useState(null); // Estado para el nombre del usuario

  // Función para añadir productos nuevos a la tienda
  const agregarProductoALaTienda = (nuevoProd) => {
    setListaProductos([nuevoProd, ...listaProductos]);
  };

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ 
      cart, 
      listaProductos, 
      usuario, 
      setUsuario, 
      agregarProductoALaTienda, 
      addToCart, 
      removeFromCart, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);