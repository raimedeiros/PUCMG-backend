import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('tipos_funcionarios').insert([
        { name: 'Sem Atribuição'},
        { name: 'Gerente'},
        { name: 'Cozinha'},
        { name: 'Salão'},
        { name: 'Caixa'},
    ])
}