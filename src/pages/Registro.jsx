import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica de contraseñas
    if (datos.password !== datos.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Simulamos que se guarda el usuario
    alert(`¡Cuenta creada para ${datos.nombre}! Ahora puedes iniciar sesión.`);
    navigate('/login');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow border-0 p-4">
            <div className="text-center mb-4">
              <h2 className="fw-bold" style={{ color: '#12876f' }}>CREAR CUENTA</h2>
              <p className="text-muted">Únete a nuestra comunidad para comprar los mejores productos</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Apellidos</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="apellidos"
                      placeholder="Tus apellidos"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Repetir Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button 
                  type="submit" 
                  size="lg"
                  style={{ backgroundColor: '#12876f', border: 'none' }}
                >
                  REGISTRARSE
                </Button>
                <Button 
                  variant="link" 
                  onClick={() => navigate('/login')} 
                  className="text-muted text-decoration-none"
                >
                  ¿Ya tienes cuenta? Inicia sesión aquí
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;