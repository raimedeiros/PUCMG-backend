import request from 'supertest';
import app from '../server';

describe('Produtos', () => {

  it('Possível listar produtos', async () => {
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

  it('Possível criar produto',async()=>{
    const response = await request(app).post('/produtos').send({
      name: "Farinha de trigo",
      expires: "2020-06-19T03:00:00.000Z",
      amount: "2000",
      estoque: 1,
    });
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: "Farinha de trigo",
      expires: "2020-06-19T03:00:00.000Z",
      amount: "2000",
      estoque: 1,
    });
  }) 

  it('Possível editar produto',async()=>{
    const response = await request(app).post('/produtos/2').send({
      name: "Leite Integral Orgânico",
      expires: "2020-04-19T03:00:00.000Z",
      amount: 3000,
      estoque_name: "Armário",
      estoque_id: 3
    });
    expect(response.body).toMatchObject({
      message: "item atualizado"
    });
  }) 

});
