import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('funcionario_tipoFuncionario').insert([
        { funcionario_id: 1, tipoFuncionario_id:2},
        { funcionario_id: 2, tipoFuncionario_id:3},
        { funcionario_id: 3, tipoFuncionario_id:4},
    ])
}