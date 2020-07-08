import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('estoques').insert([
        { title: 'Geladeira'},
        { title: 'Freezer'},
        { title: 'Armário'},
    ])
}