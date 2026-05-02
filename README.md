# 🎮 Proyecto Tienda Retro - Reto 2 (DIW)

Este proyecto representa la **evolución final** del sitio web desarrollado durante el Reto 1 para el módulo de **Diseño de Interfaces Web (2025/2026)**. En esta versión, se ha transformado el diseño inicial en una aplicación web interactiva, usable y accesible, siguiendo las directrices de la empresa DIW&CO.

## 🚀 Novedades de la Versión 2.0 (Reto Final)

Partiendo de la base del Reto 1, esta entrega incluye las siguientes mejoras clave exigidas en el desarrollo del Reto 2[cite: 1]:

### 1. Interactividad y Multimedia Avanzada
- **Gestión Dinámica de Productos:** Implementación de un flujo completo para subir nuevos productos mediante formularios interactivos.
- **Lógica de Negocio:** Uso de `React Context` para la gestión global del carrito de compra y la persistencia de productos en memoria durante la sesión.
- **Contenido Multimedia:** Repositorio de imágenes optimizadas y uso de librerías para elementos interactivos[cite: 1].

### 2. Diseño Adaptativo (Responsive Design)
Siguiendo los requisitos de usabilidad[cite: 1], la interfaz ha sido desarrollada para adaptarse a 4 tamaños de pantalla:
- **Small (Móviles):** Menús colapsables (Hamburguesa) y rejillas de una sola columna.
- **Medium (Tablets):** Ajuste de celdas y escalado de elementos multimedia.
- **Large & Extra Large (Desktop):** Layout completo con aprovechamiento total del espacio visual[cite: 1].

### 3. Sistema de Usuarios
- **Registro e Inicio de Sesión:** Flujo sencillo de autenticación con validación de datos.
- **Personalización:** El Navbar se adapta dinámicamente mostrando un saludo personalizado ("Hola, [usuario]") al detectar una sesión activa.

## 🛠️ Tecnologías Utilizadas
Como recomienda el cliente DIW&CO[cite: 1], se han utilizado tecnologías actuales:
- **ReactJS:** Core del proyecto para una interfaz SPA (Single Page Application).
- **Bootstrap (React-Bootstrap):** Framework principal para el desarrollo adaptativo y componentes UI[cite: 1].
- **Lucide-React:** Iconografía moderna y escalable.
- **CSS3 Propio:** Hoja de estilos externa para definir una identidad visual única más allá de los estilos predefinidos de Bootstrap[cite: 1].

## 📁 Estructura de Páginas (7-10 páginas)
Cumpliendo con el catálogo mínimo requerido[cite: 1]:
1. **Index:** Presentación visual de la marca.
2. **Tienda (Catálogo):** Listado dinámico de todos los productos.
3. **Categoría Detalle:** Filtrado inteligente de productos por sección.
4. **Producto Detalle:** Vista ampliada con especificaciones técnicas.
5. **Carrito de Compra:** Gestión de artículos y cálculo de totales.
6. **Subir Producto:** Formulario avanzado para expansión del catálogo.
7. **Login:** Acceso de usuarios.
8. **Registro:** Creación de nuevas cuentas.
9. **Contacto:** Formulario funcional de atención al cliente[cite: 1].

## ♿ Accesibilidad y Usabilidad
Se ha realizado un estudio profundo siguiendo las pautas **WCAG**:
- **Análisis Manual y Automático:** Verificación de niveles de conformidad mediante herramientas como WAVE[cite: 1].
- **Mejora Continua:** Contraste entre el estado inicial del Reto 1 y las optimizaciones finales del Reto 2 para garantizar una experiencia inclusiva[cite: 1].

---

## 🏗️ Instalación y Ejecución

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install