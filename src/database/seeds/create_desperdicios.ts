import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('desperdicios').insert([
        { product:'1',amount:'2kg',date:'2020/12/15',reason:'vencido'},
        { product:'2',amount:'12kg',date:'2020/12/15',reason:'vencido'},
        { product:'2',amount:'32kg',date:'2020/12/15',reason:'vencido'},
        { product:'3',amount:'442kg',date:'2020/12/15',reason:'vencido'},
        { product:'4',amount:'12kg',date:'2020/12/15',reason:'vencido'},
    ])
}