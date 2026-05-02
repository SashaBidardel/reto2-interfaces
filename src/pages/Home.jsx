import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import imgElectronica from '../assets/electronica.png';
import imgHogar from '../assets/hogar.png';
import imgDeportes from '../assets/deportes.png';
import imgNostalgicos from '../assets/nostalgicos.png';
import imgModa from '../assets/moda.png';
import imgJuegos from '../assets/juegos.png';

const Home = () => {
  const categorias = [
    { nombre: 'ELECTRONICA', img: imgElectronica },
    { nombre: 'HOGAR', img: imgHogar },
    { nombre: 'DEPORTES', img: imgDeportes },
    { nombre: 'NOSTALGICOS', img: imgNostalgicos },
    { nombre: 'MODA', img: imgModa },
    { nombre: 'JUEGOS', img: imgJuegos },
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

        {/* 3. GRID DE CATEGORÍAS (Forzado 3x2) */}
        <section className="contenedor-grid-fijo">
          {categorias.map((cat, index) => (
            <div key={index} className="columna-fija">
              <Card className="border-0 shadow-sm carta-categoria-pro">
                <Card.Body className="p-4 text-center">
                  <Card.Title className="titulo-cat-pro">{cat.nombre}</Card.Title>
                  
                  {/*  ENLACE DINÁMICO */}
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