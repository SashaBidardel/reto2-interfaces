import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Importamos el hook del contexto

const Tienda = () => {
  // 2. Obtenemos la lista dinámica en lugar del archivo fijo
  const { listaProductos } = useCart(); 

  // --- ESTADO PARA LA PAGINACIÓN ---
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 16; 

  // --- LÓGICA DE FILTRADO Y PAGINACIÓN ---
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimer = indiceUltimo - productosPorPagina;
  
  // Usamos listaProductos (la del contexto) para el slice
  const productosVisibles = listaProductos.slice(indicePrimer, indiceUltimo);

  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
    window.scrollTo(0, 0);
  };

  return (
    <main className="py-5" style={{ minHeight: '80vh' }}>
      <Container>
        <div className="d-flex flex-column align-items-center gap-3 mb-5">
          <h2 className="display-5 fw-bold m-0 titulo-principal">NUESTRA TIENDA</h2>
          <p className="text-muted m-0 subtitulo-tienda">Explora todos nuestros productos exclusivos</p>
        </div>

        <Row className="g-4">
          {productosVisibles.map((prod) => (
            <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/producto/${prod.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="carta-categoria-pro">
                  <h3 className="titulo-cat-pro">{prod.nombre}</h3>
                  <div className="contenedor-img-ajustada">
                    {/* Si la imagen es un import o una URL, funcionará igual */}
                    <img src={prod.img} alt={prod.nombre} />
                  </div>
                  <span className="precio-producto">{prod.precio}</span>
                  <small className="text-uppercase text-muted d-block mt-2" style={{fontSize: '0.7rem'}}>
                    Categoría: {prod.cat}
                  </small>
                </div>
              </Link>
            </Col>
          ))}
        </Row>

        {/* PAGINACIÓN */}
        {totalPaginas > 1 && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination className="custom-pagination">
              <Pagination.Prev 
                onClick={() => cambiarPagina(paginaActual - 1)} 
                disabled={paginaActual === 1} 
              />
              {[...Array(totalPaginas)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === paginaActual}
                  onClick={() => cambiarPagina(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next 
                onClick={() => cambiarPagina(paginaActual + 1)} 
                disabled={paginaActual === totalPaginas} 
              />
            </Pagination>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Tienda;