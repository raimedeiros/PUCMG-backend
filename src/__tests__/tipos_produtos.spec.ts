import request from 'supertest';
import app from '../server';

describe('Tipos de Funcionários', () => {

  it('possivel listar tipos de funcionarios', async () => {
    const response = await request(app).get('/tipos-funcionarios');
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: "Sem Atribuição",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Gerente",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Salão",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Cozinha",
        }),
        expect.objectContaining({
          id: expect.any(Number),
          name: "Caixa",
        }),
      ]),
    );
  })
});
