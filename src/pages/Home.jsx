import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const categorias = [
    { nombre: 'ELECTRONICA', img: '/assets/electronica.png' },
    { nombre: 'HOGAR', img: '/assets/hogar.png' },
    { nombre: 'DEPORTES', img: '/assets/deportes.png' },
    { nombre: 'NOSTALGICOS', img: '/assets/nostalgicos.png' },
    { nombre: 'MODA', img: '/assets/moda.png' },
    { nombre: 'JUEGOS', img: '/assets/juegos.png' },
  ];

  return (
    <main className="flex-shrink-0">
      <Container className="py-5">
        
        {/* 1. SECCIÓN BOTONES PRINCIPALES */}
        <div className="seccion-botones mt-5">
          <Link to="/tienda">
            <Button variant="success" id="tienda" className="shadow-sm">
              VER TODOS LOS PRODUCTOS
            </Button>
          </Link>
          <Link to="/subir-producto">
            <Button variant="outline-success" id="subir_producto" className="shadow-sm">
              SUBIR PRODUCTOS
            </Button>
          </Link>
        </div>

        {/* 2. TÍTULO SECCIÓN */}
        <div className="titulo-categorias-contenedor">
          <h2 className="fw-bold">CATEGORÍAS</h2>
        </div>

        {/* 3. GRID DE CATEGORÍAS (Dinamico con .map) */}
        <section className="contenedor-grid-fijo">
          {categorias.map((cat, index) => (
            <div key={index} className="columna-fija">
              <Card className="border-0 shadow-sm carta-categoria-pro">
                <Card.Body className="p-4 text-center">
                  <Card.Title className="titulo-cat-pro">{cat.nombre}</Card.Title>
                  
                  {/* ENLACE DINÁMICO */}
                  <Link to={`/categoria/${cat.nombre.toLowerCase()}`}>
                    <div className="contenedor-img-ajustada shadow-sm">
                      <Card.Img src={cat.img} alt={cat.nombre} />
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </section>

      </Container>
    </main>
  );
};

export default Home;