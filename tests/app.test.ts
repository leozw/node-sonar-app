import request from 'supertest';
import app from '../app';

let server: any;

beforeAll(() => {
  server = app.listen(3001);
});

afterAll(() => {
  server.close();
});

describe('Testes da API', () => {
  test('GET /', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello, World!');
  });

  test('GET /buteco', async () => {
    const response = await request(server).get('/buteco');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ "e aí?": 'Bora tomar uma?' });
  });
});
