import request from 'supertest';
import app from '../server';

describe('Tipos de Estoques', () => {

  it('possivel listar tipos de estoques', async () => {
    const response = await request(app).get('/tipos-estoques');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Frio",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Temperatura ambiente",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Congelado",
        }),
      ]),
    );
  })
});
