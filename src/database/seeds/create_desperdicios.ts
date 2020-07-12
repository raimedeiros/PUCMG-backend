import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('desperdicios').insert([
        { produto:'1',quantidade:'2kg',data:'2020/12/15',razao:'vencido'},
        { produto:'2',quantidade:'12kg',data:'2020/12/15',razao:'vencido'},
        { produto:'2',quantidade:'32kg',data:'2020/12/15',razao:'vencido'},
        { produto:'3',quantidade:'442kg',data:'2020/12/15',razao:'vencido'},
        { produto:'4',quantidade:'12kg',data:'2020/12/15',razao:'vencido'},
    ])
}