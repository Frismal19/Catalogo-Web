# Catálogo Web de Productos

Aplicación web desarrollada con React que permite visualizar y explorar un catálogo de productos mediante una interfaz dinámica, tarjetas visuales y filtros por categoría. Utiliza FakeStoreAPI para obtener información de productos en tiempo real, incluyendo nombres, imágenes y precios.

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un catálogo web que busca facilitar la visualización y exploración de inventarios de productos mediante una interfaz organizada y adaptable.

La aplicación permite consultar diferentes productos y filtrarlos por categoría, facilitando la búsqueda de artículos específicos y simulando la experiencia de navegación de una tienda en línea.

El desarrollo se enfocó en implementar una interfaz visual intuitiva, integrar una API externa y utilizar herramientas de React para gestionar y mostrar dinámicamente la información.

## Funcionalidades

- **Visualización de productos:** Presentación de productos mediante tarjetas visuales con imágenes, nombres y precios.
- **Consumo de API:** Obtención dinámica de información mediante FakeStoreAPI.
- **Filtro por categorías:** Permite seleccionar diferentes categorías para visualizar productos específicos.
- **Vista general:** Opción para mostrar todos los productos disponibles.
- **Diseño adaptable:** Distribución de los productos mediante el sistema Grid de Bootstrap.

## Tecnologías utilizadas

| Tecnología | Aplicación en el proyecto |
|---|---|
| React 19 | Desarrollo de la interfaz y renderizado dinámico de componentes. |
| JavaScript (ES6) | Lógica de programación y manipulación de datos. |
| Bootstrap | Diseño adaptable mediante el sistema Grid. |
| CSS | Personalización de estilos visuales. |
| FakeStoreAPI | Fuente externa de información de productos. |

## Estructura del proyecto

```text
Catalogo-Web/
├── public/
├── src/
│   ├── components/
│   │   └── CatalogoProductos.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Instalación y ejecución

Para ejecutar el proyecto localmente, necesitas tener instalado [Node.js](https://nodejs.org/) y npm.

### 1. Clonar el repositorio

```bash
git clone https://github.com/Frismal19/Catalogo-Web.git
```

### 2. Acceder a la carpeta del proyecto

```bash
cd Catalogo-Web
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Iniciar la aplicación

```bash
npm start
```

La aplicación estará disponible en el navegador en:

http://localhost:3000

## Scripts disponibles

El proyecto utiliza Create React App para administrar su entorno de desarrollo.

| Comando | Descripción |
|---|---|
| `npm start` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera una versión optimizada para producción. |
| `npm test` | Ejecuta las pruebas disponibles. |

## Conceptos y aprendizajes aplicados

Durante el desarrollo de este proyecto se trabajó con los siguientes conceptos:

- Consumo e integración de APIs externas.
- Renderizado dinámico de elementos utilizando `.map()`.
- Filtrado de información mediante `.filter()`.
- Gestión de estados con el hook `useState` de React.
- Organización y reutilización de componentes.
- Diseño adaptable mediante Bootstrap.
- Manipulación y visualización de datos utilizando JavaScript.

## Capturas de pantalla

<!-- Agregar aquí las capturas de pantalla del proyecto -->

## Autor

**Fabricio García**

[GitHub - Frismal19](https://github.com/Frismal19)

---

Proyecto desarrollado como parte de mi proceso de formación y aprendizaje en desarrollo de software.
