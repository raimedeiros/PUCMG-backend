import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('tipos_estoques').insert([
        { name: 'Frio'},
        { name: 'Temperatura ambiente'},
        { name: 'Congelado'},
    ])
}