import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('estoque_tipoEstoque').insert([
        { estoque_id: 1, tipoEstoque_id:1},
        { estoque_id: 2, tipoEstoque_id:2},
        { estoque_id: 3, tipoEstoque_id:3},
    ])
}