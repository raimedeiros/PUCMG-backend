import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produto_estoque').insert([
        { produto_id: 1, estoque_id:3},
        { produto_id: 2, estoque_id:3},
        { produto_id: 3, estoque_id:3},
        { produto_id: 4, estoque_id:3},
        { produto_id: 5, estoque_id:3},
        { produto_id: 6, estoque_id:3},
        { produto_id: 7, estoque_id:2},
        { produto_id: 8, estoque_id:2},
        { produto_id: 9, estoque_id:2},
        { produto_id: 10, estoque_id:2},
        { produto_id: 11, estoque_id:2},
        { produto_id: 12, estoque_id:1},
        { produto_id: 13, estoque_id:1},
        { produto_id: 14, estoque_id:1},
    ])
}