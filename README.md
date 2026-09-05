# My Library 📚 - Taller de React con Axios y CRUD by William Hernández

Aplicación web interactiva tipo SPA (Single Page Application) desarrollada en **React**, **Vite** y **Tailwind CSS**, que permite gestionar una biblioteca de libros a través de un CRUD completo conectado a una API REST simulada con **JSON Server** mediante **Axios**.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Descripción / Rol |
| :--- | :--- |
| **React 19** | Librería principal para la creación de interfaces de usuario basadas en componentes. |
| **Vite 8** | Entorno de desarrollo ultrarrápido y empaquetador para aplicaciones web modernas. |
| **React Router 7** | Enrutamiento del cliente para la navegación sin recarga de página (SPA). |
| **Tailwind CSS v4** | Framework CSS utilitario para diseño moderno y estilizado responsive. |
| **Axios** | Cliente HTTP basado en promesas para consumir y enviar peticiones a la API. |
| **JSON Server** | Servidor mock local que simula una API RESTful a partir de un archivo JSON (`server/db.json`). |
| **React Compiler** | Optimización de renderizado integrada a través de Babel y el plugin de Vite. |

---

## 📋 Funcionalidades del Taller

### 1. 🧭 Navegación SPA
- Menú de navegación global (`Navbar`) para desplazarse suavemente entre secciones sin recargar el navegador.
- Rutas configuradas:
  - **` / ` (Home)**: Página de bienvenida de la biblioteca.
  - **` /books ` (Libros)**: Catálogo principal con gestión interactiva de libros.
  - **` /location ` (Ubicación)**: Vista de información de ubicación.

### 2. 📚 Gestión CRUD Completa de Libros
- **Ver libros (Read)**: Consulta todos los libros de la API (`GET http://localhost:3000/books`) y los muestra en una cuadrícula (*grid*) responsive usando componentes `BookCard`.
- **Añadir libro (Create)**: Formulario dinámico en `AddBook` que permite registrar nuevos libros (título, autor y año) mediante peticiones `POST`.
- **Editar libro (Update)**: Permite seleccionar cualquier libro existente para cargar sus datos en el formulario y guardarlos mediante peticiones `PUT`.
- **Eliminar libro (Delete)**: Eliminación en tiempo real de registros en la base de datos simulada mediante peticiones `DELETE`.

### 3. 🛠️ Arquitectura Limpia y Servicios Centralizados
- Abstracción de llamadas HTTP en la capa de servicios (`src/services/BookServices.jsx`).
- Manejo de excepciones y resiliencia (`try/catch`) para prevenir fallos visuales en caso de problemas de red o servidor inactivo.

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
Tener instalado **Node.js** (versión 18 o superior) y **npm**.

### Pasos para iniciar el proyecto

1. **Clonar e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de la API (JSON Server):**
   En una terminal independiente, ejecuta:
   ```bash
   npm run api
   ```
   *El servidor de datos estará disponible en `http://localhost:3000/books`.*

3. **Iniciar el servidor de desarrollo de React (Vite):**
   En otra terminal, ejecuta:
   ```bash
   npm run dev
   ```
   *Abre en tu navegador la dirección indicada (por defecto `http://localhost:5173`).*

---

## 📁 Estructura del Proyecto

```text
forms/
├── public/
├── server/
│   └── db.json               # Base de datos simulada para JSON Server
├── src/
│   ├── components/           # Componentes reutilizables (NavBar, BookCard, AddBook, etc.)
│   ├── pages/                # Vistas de la aplicación (Home, Books, Location)
│   ├── services/             # Servicios de peticiones a la API (BookServices.jsx)
│   ├── App.jsx               # Configuración de rutas y layout principal
│   ├── index.css             # Configuración e importación de Tailwind CSS
│   └── main.jsx              # Punto de entrada de React con BrowserRouter
├── package.json
└── vite.config.js
```
