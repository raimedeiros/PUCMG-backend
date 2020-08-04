import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('desperdicios').insert([
        { name:'Palmito',amount:'2kg',reason:'vencido',date:'2020-06-19T03:00:00.000Z'},
        { name:'Milho',amount:'12kg',reason:'vencido',date:'2020-06-19T03:00:00.000Z'},
        { name:'Alface',amount:'32kg',reason:'vencido',date:'2020-06-19T03:00:00.000Z'},
        { name:'Leite',amount:'442kg',reason:'vencido',date:'2020-06-19T03:00:00.000Z'},
        { name:'Creme de leite',amount:'12kg',reason:'vencido',date:'2020-06-19T03:00:00.000Z'},
    ])
}