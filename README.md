
# Catálogo Web de Productos

Aplicación web desarrollada con React que permite visualizar y explorar un catálogo de productos mediante tarjetas visuales y filtros por categoría. El proyecto utiliza FakeStoreAPI para obtener información de productos, incluyendo imágenes, nombres y precios.

## Descripción del proyecto

Este proyecto busca facilitar la visualización de inventarios de productos mediante una interfaz organizada y dinámica.

La aplicación presenta los productos en tarjetas visuales y permite filtrarlos por categorías, como electrónicos, ropa y otras disponibles en la API. De esta manera, el usuario puede encontrar los productos de su interés de forma más sencilla, simulando la experiencia de navegación de una tienda en línea.

## Funcionalidades

- Visualización de productos mediante tarjetas.
- Obtención dinámica de información desde FakeStoreAPI.
- Filtrado de productos por categoría.
- Opción para visualizar todos los productos.
- Diseño adaptable a diferentes tamaños de pantalla.

## Tecnologías utilizadas

- **React 19:** Desarrollo de la interfaz y componentes reutilizables.
- **JavaScript (ES6):** Lógica de la aplicación y manipulación de datos.
- **Bootstrap:** Diseño adaptable mediante su sistema de cuadrícula (Grid).
- **FakeStoreAPI:** Fuente externa de datos para obtener los productos.
- **CSS:** Personalización de la presentación visual.

## Estructura del proyecto

```text
catalogo/
├── public/
├── src/
│   ├── components/
│   │   └── CatalogoProductos.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Instalación y ejecución

Para ejecutar el proyecto localmente, sigue estos pasos:

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar en la carpeta del proyecto

```bash
cd catalogo
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Iniciar la aplicación

```bash
npm start
```

La aplicación se abrirá automáticamente en el navegador, normalmente en:

```text
http://localhost:3000
```

## Scripts disponibles

El proyecto utiliza Create React App y dispone de los siguientes comandos:

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo. |
| `npm build` | Genera la versión optimizada para producción. |
| `npm test` | Ejecuta las pruebas disponibles. |

## Aprendizajes

Durante el desarrollo de este proyecto se trabajó con:

- Consumo de APIs externas.
- Renderizado dinámico de elementos utilizando `.map()`.
- Filtrado de información mediante `.filter()`.
- Gestión de estados con el hook `useState`.
- Organización de componentes en React.
- Implementación de diseños adaptables con Bootstrap.

---

**Proyecto desarrollado como parte de mi proceso de aprendizaje en desarrollo de software.**
