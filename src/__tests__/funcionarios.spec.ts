import request from 'supertest';
import app from '../server';

describe('Funcionarios', () => {

  it('Possível listar funcionários', async () => {
    const response = await request(app).get('/funcionarios');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          email: "gilberto@despensa.com", 
          name: "Gilberto Braga",
          type: "Gerente"
        }),
      ]),
    );
  })

  it('Possível criar funcionário',async()=>{
    const response = await request(app).post('/funcionarios').send({
      email: "gilberto@despensa.com", 
      name: "Gilberto Braga",
      password: "12345678",
    });
    expect(response.body).toMatchObject({
      email: "gilberto@despensa.com", 
      name: "Gilberto Braga",
      password: expect.any(String),
    });
  }) 

  it('Possível editar funcionário',async()=>{
    const response = await request(app).post('/funcionarios/2').send({
      email: "Felícia Braga", 
      name: "felicia@espensa.com.br",
    });
    expect(response.body).toMatchObject({
      message: "item atualizado"
    });
  }) 

});
