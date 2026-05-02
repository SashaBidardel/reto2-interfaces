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

  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) return <p>Producto no encontrado</p>;

  const handleAdd = () => {
    addToCart(producto, cantidad);
    navigate('/cart'); // Te lleva al carrito tras añadir
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img src={producto.img} alt={producto.nombre} className="img-fluid rounded border" />
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#12876f' }}>{producto.nombre}</h2>
          <p className="fs-3 fw-bold">{producto.precio}</p>
          
          <Form.Group className="mb-3" style={{ maxWidth: '100px' }}>
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control 
              type="number" 
              value={cantidad} 
              min="1" 
              onChange={(e) => setCantidad(parseInt(e.target.value))} 
            />
          </Form.Group>

          <Button onClick={handleAdd} style={{ backgroundColor: '#12876f', border: 'none' }}>
            Añadir al Carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductoDetalle;