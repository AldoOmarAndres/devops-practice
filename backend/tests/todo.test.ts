import request from 'supertest';
import app from '../src/app'; 

describe('API de Tareas ToDo', () => {

  it('prueba de endpoint de suma', async () => {

    const postResponse = await request(app)
      .post('/api/test')
      .send({num1:1, num2:3});

    expect(postResponse.statusCode).toBe(200);
    expect(postResponse.body).toBe(4);
  });

  // Pensado para cuando tenga la db levantada
  it('debería devolver un error 400 si se intenta crear una tarea sin descripción', async () => {
    const invalidTask = {
      status: 'en_proceso',
    };

    const response = await request(app)
      .post('/api/tasks')
      .send(invalidTask);

    expect(response.statusCode).toBe(500);
  });
});