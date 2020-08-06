import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produtos').insert([
        { name: 'Milho verde em conserva',expires:'2020-06-19T03:00:00.000Z', amount: 5},
        { name: 'Leite Integral',expires:'2020-04-19T03:00:00.000Z', amount: 2000},
        { name: 'Farinha de trigo',expires:'2020-06-12T03:00:00.000Z', amount: 2000},
        { name: 'Farinha de milho',expires:'2020-06-13T03:00:00.000Z', amount: 4300},
        { name: 'Sal',expires:'2020-06-15T03:00:00.000Z', amount: 1000},
        { name: 'Açucar',expires:'2020-02-19T03:00:00.000Z', amount: 5000},
        { name: 'Manteiga',expires:'2020-06-22T03:00:00.000Z', amount: 10000},
        { name: 'Leite Integral',expires:'2020-05-19T03:00:00.000Z', amount: 1000},
        { name: 'Passata de tomate',expires:'2020-06-20T03:00:00.000Z', amount: 2000},
        { name: 'Queijo Mussarela',expires:'2020-08-19T03:00:00.000Z', amount: 2000},
        { name: 'Manjericão',expires:'2020-01-19T03:00:00.000Z', amount: 200},
        { name: 'Morangos congelados',expires:'2020-02-19T03:00:00.000Z', amount: 2000},
        { name: 'Calda de laranja',expires:'2020-11-19T03:00:00.000Z', amount: 500},
        { name: 'Banana congelada',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
    ])
}