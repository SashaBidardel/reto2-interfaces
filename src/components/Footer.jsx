import React, { useEffect } from 'react';
import $ from 'jquery'; // Importamos jQuery para el requisito interactivo
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  
  useEffect(() => {
    // REQUISITO: Contenido interactivo con jQuery
    // Al pasar el ratón por los iconos, hacemos que "salten" o cambien de tamaño
    $('#iconos_redes a').on('mouseenter', function() {
      $(this).css('transition', '0.3s').css('transform', 'scale(1.3)');
    }).on('mouseleave', function() {
      $(this).css('transform', 'scale(1)');
    });
  }, []);

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Columna de Texto - Tamaño adaptativo */}
          <Col xs={12} md={8} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © 2026 **Segunda Oportunidad** – Una nueva vida para tus productos.
            </p>
          </Col>

          {/* Columna de Redes Sociales */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <div id="iconos_redes" className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;