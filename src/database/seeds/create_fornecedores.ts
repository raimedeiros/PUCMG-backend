import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('fornecedores').insert([
        { name: "Dona de Casa SA",address:"CLSW 104 bloco C - Subsolo", phone:"(61) 3246-4250"},
        { name: "Mercado Malunga",address:"Bloco A - CLSW 104, LJ, C", phone:"(61) 3772-1613"},
        { name: "Pães & Vinhos Mercado Gourmet",address:"CLSW 303 Bloco A LOJA 2", phone:"(61) 3344-0341"},
    ])
}