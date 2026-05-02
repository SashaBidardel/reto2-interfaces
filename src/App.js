import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home'; 
import Footer from './components/Footer';
import CategoriaDetalle from './pages/CategoriaDetalle';
import Tienda from './pages/Tienda';
import Cart from './pages/Cart';
import ProductoDetalle from './pages/ProductoDetalle';
import SubirProducto from './pages/SubirProducto';

import { CartProvider } from './context/CartContext'; 
import Login from './pages/Login';
import Registro from './pages/Registro'

function App() {
  return (
    // 1. El CartProvider envuelve todo para que el carrito y el usuario funcionen en cualquier página
    <CartProvider>
      
      {/* 2. El BrowserRouter maneja la navegación y el basename para GitHub Pages */}
      <BrowserRouter basename="/reto2-interfaces">
        
        {/* 3. Componentes fijos (se ven en todas las rutas) */}
        <NavigationBar />

        {/* 4. Definición de rutas dinámicas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/categoria/:id" element={<CategoriaDetalle />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subir-producto" element={<SubirProducto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>

        {/* 5. Footer fijo al final */}
        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;