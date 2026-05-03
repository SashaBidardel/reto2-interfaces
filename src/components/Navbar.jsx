import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge, Button } from 'react-bootstrap'; // Añadido Button
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavigationBar = () => {
  // Extraemos todo lo necesario del contexto
  const { cart, usuario, setUsuario } = useCart();

  // Sumamos todas las cantidades de los productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/logo.png" alt="Logo"
            alt="Logo Mi Tienda"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/tienda">Tienda</Nav.Link>
            <Nav.Link as={Link} to="/subir-producto">Subir Producto</Nav.Link>

            {/* LÓGICA DE USUARIO */}
            {usuario ? (
              <div className="d-flex align-items-center ms-lg-3">
                <span className="me-3 fw-bold" style={{ color: '#12876f' }}>
                  Hola, {usuario}
                </span>
                <Button 
                  variant="link" 
                  className="p-0 text-decoration-none" 
                  style={{ color: '#dc3545' }} 
                  onClick={() => setUsuario(null)}
                >
                  Salir
                </Button>
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/registro">REGISTRO</Nav.Link>
                <Nav.Link as={Link} to="/multimedia">MULTIMEDIA</Nav.Link>
              </>
            )}

            {/* ICONO DE CARRITO */}
            <Nav.Link as={Link} to="/cart" className="position-relative ms-lg-3">
              <ShoppingCart size={24} color="#12876f" strokeWidth={2.5} />
              {totalItems > 0 && (
                <Badge 
                  pill 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.7rem' }}
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;