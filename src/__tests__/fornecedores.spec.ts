import request from 'supertest';
import app from '../server';

describe('Fornecedores', () => {

  it('Possível listar fornecedores', async () => {
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
  
  it('Possível criar Fornecedor',async()=>{
    const response = await request(app).post('/fornecedores').send({
      address: "Scee / Sul Lote B - Guará, Brasília - DF",
      name: 'Carrefour Hipermercado',
      phone: "(61) 3208-2314",
    });
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      address: "Scee / Sul Lote B - Guará, Brasília - DF",
      name: 'Carrefour Hipermercado',
      phone: "(61) 3208-2314",
    });
  }) 

  it('Possível editar Fornecedor',async()=>{
    const response = await request(app).post('/fornecedores/2').send({
      name: "Mercado Malunga Brasília",
      address: "Bloco A - CLSW 104, LJ, C",
      phone: "(61) 3772-1613"
    });
    expect(response.body).toMatchObject({
      message: "item atualizado"
    });
  }) 
});
