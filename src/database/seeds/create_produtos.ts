import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produtos').insert([
        { name: 'Milho verde em conserva',expires:'2020/12/30', amount: 5},
        { name: 'Leite Integral',expires:'2020/11/30', amount: 15},
        { name: 'Manteiga',expires:'2020/11/08', amount: 30},
    ])
}