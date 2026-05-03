import React, { useEffect } from 'react';
import $ from 'jquery';

const Multimedia = () => {
  useEffect(() => {
    // 1. Control del Vídeo: Efecto persiana
    $('#boton-video').on('click', function() {
      $('#contenedor-video').slideToggle('slow');
    });

    // 2. Control de Imágenes: Opacidad y Texto (Capa-info)
    $('.foto-interactiva').on('mouseenter', function() {
      // Bajamos opacidad de la imagen
      $(this).css('opacity', '0.7');
      // Mostramos el texto que está justo debajo (capa-info)
      $(this).parent().find('.capa-info').fadeIn();
    }).on('mouseleave', function() {
      $(this).css('opacity', '1');
      $(this).parent().find('.capa-info').fadeOut();
    });

    // Limpieza al desmontar el componente (buena práctica)
    return () => {
      $('#boton-video').off('click');
      $('.foto-interactiva').off('mouseenter mouseleave');
    };
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Repositorio Multimedia Interactiva</h2>
      
      {/* SECCIÓN VÍDEO */}
      <div className="text-center mb-5">
        <button id="boton-video" className="btn btn-primary shadow-sm">
          Ver Vídeo Promocional
        </button>
        
        <div id="contenedor-video" style={{display: 'none', marginTop: '20px'}}>
          <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
            <video controls>
              <source src="/assets/videopromocion.mp4" />
              Tu navegador no soporta vídeos.
            </video>
          </div>
        </div>
      </div>

      {/* SECCIÓN GALERÍA */}
      <div className="row mt-5">
        <h3 className="text-center mb-4">Nuestra Colección Destacada</h3>
        
        {/* Imagen 1 */}
        <div className="col-md-6 mb-4 text-center">
          <div className="contenedor-foto overflow-hidden shadow rounded p-3 bg-white">
            <img 
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=500" 
              className="img-fluid foto-interactiva" 
              style={{ transition: '0.3s' }}
              alt="Ropa Sostenible" 
            />
            <div className="capa-info" style={{display: 'none', marginTop: '10px'}}>
              <p className="fw-bold text-primary">Moda Sostenible 2026</p>
            </div>
          </div>
        </div>

        {/* Imagen 2 */}
        <div className="col-md-6 mb-4 text-center">
          <div className="contenedor-foto overflow-hidden shadow rounded p-3 bg-white">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=500" 
              className="img-fluid foto-interactiva" 
              style={{ transition: '0.3s' }}
              alt="Accesorios Reciclados" 
            />
            <div className="capa-info" style={{display: 'none', marginTop: '10px'}}>
              <p className="fw-bold text-primary">Accesorios Reciclados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multimedia;

