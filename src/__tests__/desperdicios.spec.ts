import request from 'supertest';
import app from '../server';

describe('Deseperdicios', () => {

  it('possivel listar desperdicios', async () => {
    const response = await request(app).get('/desperdicios');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Chocolate Callebaut 75%",
          amount: "2000",
          reason: "vencido",
          date: "2020-06-19T03:00:00.000Z"
        }),
      ]),
    );
  })
});
