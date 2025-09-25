# 🧩 DevOps: Trabajo Práctico 1

Bienvenido al repositorio del [trabajo práctico 1](https://docs.google.com/document/d/1t88Qv7iCp90YzHOi2W8MfY7bfFoTcjVz1UkCZPzs84c/edit?tab=t.0) del cursado 2025 de DevOps, realizado por:

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

```yaml
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

Se pueden definir las siguientes variables de entorno:

- `frontend/.env`:

  ```
  VITE_API_URL
  ```

- `backend/.env`:
  ```
  REDIS_HOST
  REDIS_PORT
  ```

## 🚀 Despliegue

Se utiliza [Railway](https://railway.com) para desplegar la aplicación.
Se creó un proyecto `devops-practice`.

Con el siguiente comando se crean tres servicios `frontend`, `backend` y `redis`.

```
railway login
railway link

railway add -s backend \
   -i agustinbravop/devops-practice-backend:latest \
   -v "REDIS_HOST=redis" \
   -v "REDIS_PORT=6379" \
   -v "NODE_ENV=production"

railway add -s frontend \
   -i agustinbravop/devops-practice-frontend:latest \
   -v "VITE_API_URL=https://backend-production.up.railway.app/api"

railway add -s redis \
   -i redis:7-alpine
```

Estas variables se guardan como GitHub Action Secrets para utilizarse en la GitHub Action.
Pasos:

1. GitHub Actions ejecuta todos los pasos de integración continua.
2. GitHub Actions construye las imagenes de contenedores y las publica en Docker Hub.
3. Railway detecta una nueva imagen con la etiqueta `latest` en Docker Hub y redespliega los servicios.

## ⚒️ Tareas Pendientes

Esta lista NO es exhaustiva!

- [x] Migrar el frontend a Vite ([Create React App](https://github.com/facebook/create-react-app) está deprecado).
- [x] Agregar un paso de lint a la pipeline de CI.
- [x] Construir contenedores y publicarlos en un Package Registry.
- [ ] Agregar la funcionalidad de eliminar tareas.
- [ ] Agregar tests al frontend.
- [ ] Opcional: agregar una UI de Redis.
- [ ] Opcional: hacer un monorepo con Nx (para probar una alternativa a Turborepo).
- [ ] Opcional: mejorar la UX de la app.
- [ ] Documentar la arquitectura con un diagrama.
- [ ] Preparar un informe o presentación que resuma resultados obtenidos, dificultades encontradas, y oportunidades de mejora.
