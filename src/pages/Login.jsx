import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Login = () => {
  const { setUsuario } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const entrar = (e) => {
    e.preventDefault();
    // Cogemos la parte del email antes del @ como nombre para el "Hola..."
    const nombreUsuario = email.split('@')[0];
    setUsuario(nombreUsuario); 
    navigate('/');
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <Form onSubmit={entrar}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Button type="submit" className="w-100" style={{backgroundColor: '#12876f', border: 'none'}}>ENTRAR</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;