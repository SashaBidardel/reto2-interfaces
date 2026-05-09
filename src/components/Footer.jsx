import React from 'react'; // Quitamos el useEffect si ya no lo usas
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} className="text-center"> 
            <p className="mb-0">
              © 2026 **Segunda Oportunidad** – Una nueva vida para tus productos.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;