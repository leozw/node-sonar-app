const request = require('supertest');
const app = require('../app');

describe('Testes da API', () => {
  test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello, World!');
  });

  test('GET /mensagem', async () => {
    const response = await request(app).get('/buteco');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ mensagem: 'Bora tomar uma?' });
  });
});
