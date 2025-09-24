# 🧩 DevOps: Trabajo Práctico 1

Bienvenido al repositorio del trabajo práctico 1 del cursado 2025 de DevOps, realizado por:

- Aldo Omar Andres.
- Agustín Nicolás Bravo Pérez.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/28058df562244e0db8beceaa1a88d0bf)](https://app.codacy.com/gh/AldoOmarAndres/devops-practice/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

## ✨ Aplicación: Lista de Tareas

Construimos una simple _todo application_ con los siguientes componentes:

- Una app web desarrollada con React y Vite.
- Un servidor desarrollado con TypeScript y Express.js.
- Una base de datos Redis.

La aplicación permite ver la lista de tareas, crear tareas nuevas y actualizar o eliminar tareas existentes.

## 📂 Estructura del Proyecto

```
devops-practice
├── backend          # Backend application using Express.js
│   ├── src
│   │   ├── app.ts                  # Entry point of the backend application
│   │   ├── controllers
│   │   │   └── todoController.ts   # Controller for handling todo operations
│   │   └── routes
│   │       └── todoRoutes.ts        # Routes for todo operations
│   ├── package.json                 # NPM configuration for backend
│   ├── tsconfig.json                # TypeScript configuration for backend
│   └── Dockerfile                   # Dockerfile for backend
├── frontend         # Frontend application using React and Vite
│   ├── src
│   │   ├── App.jsx                  # Main component of the React application
│   │   └── index.jsx                # Entry point of the React application
│   ├── index.html                   # HTML template for Vite
│   ├── vite.config.js               # Vite configuration
│   ├── package.json                 # NPM configuration for frontend
│   └── Dockerfile                   # Dockerfile for frontend
├── docker-compose.yml                # Docker Compose configuration
└── README.md                        # Project documentation
```

## 🧑‍💻 Primeros Pasos

Requerimientos para levantar el proyecto:

- Docker.

1. Clonar el repositorio:

   ```
   git clone https://github.com/AldoOmarAndres/devops-practice.git
   cd devops-practice
   ```

2. Construir y ejecutar la aplicación usando Docker Compose:

   ```
   docker compose up --build
   ```

3. Visitar la UI en `http://localhost:3000` y la API en `http://localhost:3001`.

## 🚀 Despliegue

// TODO...

## ⚒️ Tareas Pendientes

Esta lista NO es exhaustiva!

- [x] Migrar el frontend a Vite ([Create React App](https://github.com/facebook/create-react-app) está deprecado).
- [ ] Agregar un paso de lint a la pipeline de CI.
- [ ] Construir contenedores y publicarlos en un Package Registry.
- [ ] Documentar la arquitectura con un diagrama.
- [ ] Agregar la funcionalidad de eliminar tareas.
- [ ] Opcional: agregar una UI de Redis.
- [ ] Opcional: hacer un monorepo con Nx (para probar una alternativa a Turborepo).
- [ ] Opcional: mejorar la UX de la app.
- [ ] Preparar un informe o presentación que resuma resultados obtenidos, dificultades encontradas, y oportunidades de mejora.
