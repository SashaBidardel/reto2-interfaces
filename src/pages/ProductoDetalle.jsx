import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { productos } from '../data/productos';
import { useCart } from '../context/CartContext';

const ProductoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);

  // Buscamos el producto por ID
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) return <Container className="py-5"><p>Producto no encontrado</p></Container>;

  const handleAdd = () => {
    addToCart(producto, cantidad);
    navigate('/cart');
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          {/* Al empezar la ruta con / en el JS, React la encuentra siempre */}
          <img 
            src={producto.img} 
            alt={producto.nombre} 
            className="img-fluid rounded shadow-sm border" 
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Col>
        <Col md={6}>
          <nav aria-label="breadcrumb">
            <p className="text-muted small text-uppercase">{producto.cat}</p>
          </nav>
          <h2 className="display-5 fw-bold" style={{ color: '#12876f' }}>{producto.nombre}</h2>
          <p className="fs-2 text-dark">{producto.precio}</p>
          <hr />
          
          <Form.Group className="mb-4" style={{ maxWidth: '120px' }}>
            <Form.Label className="fw-bold">Cantidad:</Form.Label>
            <Form.Control 
              type="number" 
              value={cantidad} 
              min="1" 
              onChange={(e) => setCantidad(Math.max(1, parseInt(e.target.value) || 1))} 
            />
          </Form.Group>

          <Button 
            onClick={handleAdd} 
            size="lg"
            className="w-100 w-md-auto"
            style={{ backgroundColor: '#12876f', border: 'none', padding: '12px 40px' }}
          >
            Añadir al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoDetalle;