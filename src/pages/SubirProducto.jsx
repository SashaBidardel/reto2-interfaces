import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';


const SubirProducto = () => {
  const { agregarProductoALaTienda } = useCart();
  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    nombre: '',
    precio: '',
    cat: '',
    img: null // Ahora empezamos con null
  });

  // Capturar cambios de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  // NUEVA FUNCIÓN: Capturar el archivo de imagen
  const handleFileChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      // Creamos una URL temporal que React pueda leer
      const urlTemporal = URL.createObjectURL(archivo);
      setDatos({ ...datos, img: urlTemporal });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoProducto = {
      ...datos,
      id: Date.now(),
      // Si no seleccionó archivo, usamos la genérica
      img: datos.img ? datos.img : "/assets/producto.png",
      precio: parseFloat(datos.precio)
    };

    agregarProductoALaTienda(nuevoProducto);
    alert(`¡Producto "${datos.nombre}" subido!`);
    navigate('/tienda');
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow border-0">
            <h2 className="text-center mb-4" style={{ color: '#12876f', fontWeight: 'bold' }}>NUEVO PRODUCTO</h2>
            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Nombre</Form.Label>
                <Form.Control required type="text" name="nombre" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Precio (€)</Form.Label>
                <Form.Control required type="number" step="0.01" name="precio" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Categoría</Form.Label>
                <Form.Select required name="cat" onChange={handleChange}>
                  <option value="">Elige la categoría</option>
                  <option value="nostalgicos">Nostálgicos</option>
                  <option value="deportes">Deportes</option>
                  <option value="electronica">Electrónica</option>
                  <option value="hogar">Hogar</option>
                  <option value="juegos">Juegos</option>
                  <option value="moda">Moda</option>
                </Form.Select>
              </Form.Group>

            
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold">Imagen del Producto</Form.Label>
                <Form.Control 
                  type="file" 
                  accept="image/*" // Solo permite imágenes
                  onChange={handleFileChange} 
                />
                <Form.Text className="text-muted">
                  Si no eliges archivo, usaremos la imagen por defecto.
                </Form.Text>
              </Form.Group>

             
              {datos.img && (
                <div className="text-center mb-3">
                  <p className="small text-muted">Vista previa:</p>
                  <img src={datos.img} alt="Preview" style={{ width: '100px', borderRadius: '8px' }} />
                </div>
              )}

              <div className="d-grid gap-2">
                <Button type="submit" style={{ backgroundColor: '#12876f', border: 'none' }}>
                  PUBLICAR PRODUCTO
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SubirProducto;