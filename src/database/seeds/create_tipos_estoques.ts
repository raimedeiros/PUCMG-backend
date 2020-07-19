import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('tipos_estoques').insert([
        { name: 'Congelado'},
        { name: 'Frio'},
        { name: 'Temperatura ambiente'},
        { name: 'Morno'},
        { name: 'Quente'},
    ])
}