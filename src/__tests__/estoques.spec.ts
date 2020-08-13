import request from 'supertest';
import app from '../server';

describe('Estoques', () => {

  it('Possível listar estoques', async () => {
    const response = await request(app).get('/estoques');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Freezer",
          type: "Congelado",
          quantidade_produtos: expect.any(Number)
        }),
      ]),
    );
  })
  it('Possível criar estoque',async()=>{
    const response = await request(app).post('/estoques').send({
      name: 'Estoque de teste',
      type: 1,
    });
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: 'Estoque de teste',
    });
  }) 
});
