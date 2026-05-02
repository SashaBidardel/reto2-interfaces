import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    // 2. ENVOLVEMOS TODO CON EL CARTPROVIDER
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/categoria/:id" element={<CategoriaDetalle />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subir-producto" element={<SubirProducto />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;