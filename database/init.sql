CREATE TYPE task_status AS ENUM ('pendiente', 'en_proceso', 'realizada');

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    status task_status DEFAULT 'pendiente',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Datos de ejemplo
INSERT INTO tasks (description) VALUES ('Aprender Docker');
INSERT INTO tasks (description, status) VALUES ('Crear una app ToDo', 'en_proceso');
INSERT INTO tasks (description, status) VALUES ('Conquistar el mundo', 'realizada');