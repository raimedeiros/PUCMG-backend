import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produto_estoque').insert([
        { produto_id: 1, estoque_id:3},
        { produto_id: 2, estoque_id:3},
        { produto_id: 3, estoque_id:3},
        { produto_id: 4, estoque_id:3},
        { produto_id: 5, estoque_id:3},
        { produto_id: 6, estoque_id:3},
        { produto_id: 7, estoque_id:3},
        { produto_id: 8, estoque_id:3},
        { produto_id: 9, estoque_id:3},
        { produto_id: 10, estoque_id:3},
        { produto_id: 11, estoque_id:3},
        { produto_id: 12, estoque_id:3},
        { produto_id: 13, estoque_id:3},
        { produto_id: 14, estoque_id:3},
        { produto_id: 15, estoque_id:3},
        { produto_id: 16, estoque_id:3},
        { produto_id: 17, estoque_id:3},
        { produto_id: 18, estoque_id:3},
        { produto_id: 19, estoque_id:3},
        { produto_id: 20, estoque_id:3},
        { produto_id: 21, estoque_id:3},

        { produto_id: 22, estoque_id:2},
        { produto_id: 23, estoque_id:2},
        { produto_id: 24, estoque_id:2},
        { produto_id: 25, estoque_id:2},
        { produto_id: 26, estoque_id:2},
        { produto_id: 27, estoque_id:2},
        { produto_id: 28, estoque_id:2},
        { produto_id: 29, estoque_id:2},
        { produto_id: 30, estoque_id:2},
        { produto_id: 31, estoque_id:2},
        { produto_id: 32, estoque_id:2},



        { produto_id: 33, estoque_id:1},
        { produto_id: 34, estoque_id:1},
        { produto_id: 35, estoque_id:1},
        { produto_id: 36, estoque_id:1},
        { produto_id: 37, estoque_id:1},
        { produto_id: 38, estoque_id:1},
        { produto_id: 39, estoque_id:1},
        { produto_id: 40, estoque_id:1},
        { produto_id: 41, estoque_id:1},
        { produto_id: 42, estoque_id:1},
        { produto_id: 43, estoque_id:1},
        { produto_id: 44, estoque_id:1},
    ])
}