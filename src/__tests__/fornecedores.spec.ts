import request from 'supertest';
import app from '../server';

describe('Fornecedores', () => {

  it('possivel listar fornecedores', async () => {
    const response = await request(app).get('/fornecedores');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          address: "CLSW 104 bloco C - Subsolo", 
          name: "Dona de Casa SA", 
          phone: "(61) 3246-4250"
        }),
      ]),
    );
  })
});
