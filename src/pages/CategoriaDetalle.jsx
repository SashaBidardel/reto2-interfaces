import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // 1. Importamos el hook

const CategoriaDetalle = () => {
  const { id } = useParams();
  
  // 2. Obtenemos la lista dinámica del contexto
  const { listaProductos } = useCart();

  // 3. Filtramos sobre la lista dinámica
  const filtrados = listaProductos.filter(
    (p) => p.cat.toLowerCase() === id.toLowerCase()
  );

  return (
    <main className="py-5" style={{ minHeight: '80vh' }}>
      <Container>
        {/* Encabezado dinámico */}
        <div className="d-flex flex-column align-items-center gap-3 mb-5">
          <h2 className="display-5 fw-bold m-0 titulo-principal">
            {id.toUpperCase()}
          </h2>
          <p className="text-muted m-0 subtitulo-tienda">
            Catálogo exclusivo de la sección {id}
          </p>
        </div>

        <Row className="g-4">
          {filtrados.length > 0 ? (
            filtrados.map((prod) => (
              <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
                <Link 
                  to={`/producto/${prod.id}`} 
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="carta-categoria-pro">
                    <h3 className="titulo-cat-pro">{prod.nombre}</h3>
                    <div className="contenedor-img-ajustada">
                      <img src={prod.img} alt={prod.nombre} />
                    </div>
                    <span className="precio-producto">{prod.precio}</span>
                    
                  </div>
                </Link>
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <p className="fs-4 text-muted">Aún no hay productos en esta categoría.</p>
              <Link to="/subir-producto" className="btn btn-success mt-3" style={{backgroundColor: '#12876f', border: 'none'}}>
                ¡Sé el primero en subir uno!
              </Link>
            </Col>
          )}
        </Row>
      </Container>
    </main>
  );
};

export default CategoriaDetalle;