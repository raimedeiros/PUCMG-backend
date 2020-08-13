import request from 'supertest';
import app from '../server';

describe('Estoques', () => {

  it('possivel listar produtos', async () => {
    const response = await request(app).get('/produtos');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Milho verde em conserva",
          expires: "2020-06-19T03:00:00.000Z",
          amount: expect.any(Number),
          estoque_name: "Armário",
          estoque_id: expect.any(Number)
        }),
      ]),
    );
  })
});
