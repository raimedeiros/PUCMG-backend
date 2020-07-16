import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produto_estoque').insert([
        { produto_id: 1, estoque_id:1},
        { produto_id: 2, estoque_id:2},
        { produto_id: 3, estoque_id:3},
    ])
}