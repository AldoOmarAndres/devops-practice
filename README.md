# Todo Application

This is a simple Todo application built with a React frontend, an Express.js backend, and a PostgreSQL database (not implemented yet). The application allows users to create, read and update tasks items.

## Project Structure

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
├── frontend         # Frontend application using React
│   ├── src
│   │   └── App.js                   # Main component of the React application
│   ├── package.json                 # NPM configuration for frontend
│   └── Dockerfile                   # Dockerfile for frontend
├── docker-compose.yml                # Docker Compose configuration
└── README.md                        # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd devops-practice
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend application at `http://localhost:3000` and the backend API at `http://localhost:4000`.

### Usage

- You can create new todo items, view the list of todos, and update existing items through the frontend interface.