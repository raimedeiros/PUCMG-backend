import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produtos').insert([
        { name: 'Milho verde em conserva',expires:'2020-06-19T03:00:00.000Z', amount: 5},
        { name: 'Leite Integral',expires:'2020-04-19T03:00:00.000Z', amount: 15},
        { name: 'Farinha de trigo',expires:'2020-06-12T03:00:00.000Z', amount: 2},
        { name: 'Farinha de milho',expires:'2020-06-13T03:00:00.000Z', amount: 34},
        { name: 'Sal',expires:'2020-06-15T03:00:00.000Z', amount: 14},
        { name: 'Açucar',expires:'2020-02-19T03:00:00.000Z', amount: 22},
        { name: 'Manteiga',expires:'2020-06-22T03:00:00.000Z', amount: 30},
        { name: 'Leite Integral',expires:'2020-05-19T03:00:00.000Z', amount: 2},
        { name: 'Passata de tomate',expires:'2020-06-20T03:00:00.000Z', amount: 2},
        { name: 'Queijo Mussarela',expires:'2020-08-19T03:00:00.000Z', amount: 5},
        { name: 'Repolho',expires:'2020-01-19T03:00:00.000Z', amount: 2},
        { name: 'Salmão',expires:'2020-02-19T03:00:00.000Z', amount: 2},
        { name: 'Carne moída',expires:'2020-11-19T03:00:00.000Z', amount: 5},
        { name: 'Salsicha',expires:'2020-12-19T03:00:00.000Z', amount: 4},
    ])
}