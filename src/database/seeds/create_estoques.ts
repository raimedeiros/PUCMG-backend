import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('estoques').insert([
        { name: 'Geladeira'},
        { name: 'Freezer'},
        { name: 'Armário'},
    ])
}