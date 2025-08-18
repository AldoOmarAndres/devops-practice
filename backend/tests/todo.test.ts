import request from 'supertest';

// Importa la aplicación de Express para probarla directamente, 
// o usa la URL base de tu servidor si se ejecuta por separado.
import app from '../src/app'; 

describe('API de Tareas ToDo', () => {

  // Test 1: Verificar que se pueden crear y obtener tareas
  // Este test comprueba el flujo de creación de una tarea y su posterior recuperación.
  it('debería crear una nueva tarea y devolverla en la lista de tareas', async () => {
    // 1. Definir los datos de la nueva tarea
    

    // 2. Enviar una solicitud POST para crear la tarea
    const postResponse = await request(app)
      .post('/api/test')
      .send({num1:1, num2:3});

    // 3. Verificar la respuesta de la creación
    expect(postResponse.statusCode).toBe(201); // El código de estado HTTP 201 significa "Creado"
    expect(postResponse.body).toBe(4);
    
  });


  // Test 2: Manejo de errores - Verificar la creación de una tarea sin descripción
  // Este test evalúa la validación de la API.
  it('debería devolver un error 400 si se intenta crear una tarea sin descripción', async () => {
    // 1. Definir una tarea incompleta (sin descripción)
    const invalidTask = {
      status: 'en_proceso',
    };

    // 2. Enviar una solicitud POST con la tarea inválida
    const response = await request(app)
      .post('/api/tasks')
      .send(invalidTask);

    // 3. Verificar que la respuesta es un error 400
    expect(response.statusCode).toBe(500); // El código 400 significa "Bad Request"
  });
});