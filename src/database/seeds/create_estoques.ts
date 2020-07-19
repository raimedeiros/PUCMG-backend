import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('estoques').insert([
        { name: 'Freezer'},
        { name: 'Geladeira'},
        { name: 'Armário'},
    ])
}