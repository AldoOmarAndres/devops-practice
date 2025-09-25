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
├── .github          # Definición de la GitHub Action
├── backend          # Servidor backend con TypeScript y Express.js
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend         # App web frontend con React y Vite
│   ├── src
│   │   └── index.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🧑‍💻 Desarrollo

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
  VITE_API_URL=http://localhost:3001/api
  ```

- `backend/.env`:

  ```
  REDIS_URL=redis://localhost:6379
  PORT=80
  ```

## 🚀 Despliegue

Se utiliza [Railway](https://railway.com) para desplegar la aplicación.
Se creó un proyecto `devops-practice`.

Con los siguientes comandos interactivos se crean tres servicios `frontend`, `backend` y `redis`:

```bash
railway login
railway link

railway add -s backend \
   -i agustinbravop/devops-practice-backend:latest \
   -v "REDIS_URL=redis://redis:6379?family=6" \
   -v "PORT=80"
```

Es necesario ir manualmente al servicio `backend` y generar una URL para habilitarlo al público.
Esa URL `https://backend-production-ced8.up.railway.app` luego se pone en el paso `build-frontend` de la GitHub Action como el argumento `VITE_API_URL` agregando un `/api` al final.
Esto es necesario porque Vite compila la aplicación al momento de construir la imagen y no procesa variables de entorno en tiempo de ejecución.

```bash
railway add -s frontend \
   -i agustinbravop/devops-practice-frontend:latest

railway add -s redis \
   -i redis:7-alpine \
   -v "REDISHOST=redis" \
   -v "REDISPORT=6379" \
   -v "REDISUSER=default" \
   -v "REDISPASSWORD=" \
```

Luego se necesita manualmente habilitar al público el servicio `frontend`.
En `redis` es necesario habilitar un TCP Proxy con el puerto `6379`.

También es necesario en ambos servicios habilitar los redespliegues automáticos cuando se actualiza la imagen con etiqueta `latest`.
Esto no resultó simple de automatizar, demostrando un inconveniente de Railway: prioriza la experiencia de la GUI por sobre la CLI.

Se tiene una GitHub Action para el despliegue.
Pasos:

1. GitHub Actions ejecuta todos los pasos de integración continua.
2. GitHub Actions construye las imagenes de contenedores y las publica en Docker Hub.
3. Railway detecta una nueva imagen con la etiqueta `latest` en Docker Hub y redespliega los servicios.

Esta GitHub Action requiere las siguientes variables y secrets:

```
DOCKERHUB_USERNAME=
DOCKERHUB_TOKEN=
```

## ⚒️ Tareas Pendientes

Esta lista NO es exhaustiva!

- [x] Migrar el frontend a Vite ([Create React App](https://github.com/facebook/create-react-app) está deprecado).
- [x] Agregar un paso de lint a la pipeline de CI.
- [x] Construir contenedores y publicarlos en un Package Registry.
- [x] Agregar la funcionalidad de eliminar tareas.
- [ ] Agregar tests al frontend.
- [x] Opcional: agregar una UI de Redis.
- [ ] Opcional: probar una herramienta de monorepos para ejecutar scripts (alguna alternativa a Turborepo).
- [ ] Opcional: mejorar la UX de la app.
- [ ] Opcional: probar configurar Railway para que el despliegue sea automático.
- [ ] Documentar la arquitectura con un diagrama.
- [ ] Preparar un informe o presentación que resuma resultados obtenidos, dificultades encontradas, y oportunidades de mejora.
