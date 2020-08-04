import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('funcionario_tipoFuncionario', table => {
    table.increments('id').primary();
    table.integer('funcionario_id')
    .notNullable()
    .references('id')
    .inTable('funcionarios')
    table.integer('tipoFuncionario_id')
    .notNullable()
    .references('id')
    .inTable('tipos_funcionarios')
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('funcionario_tipoFuncionario')
}