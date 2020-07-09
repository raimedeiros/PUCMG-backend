import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('funcionarios',table =>{
    table.string('id').primary().notNullable()
    table.string('type').notNullable()
    table.string('name').notNullable()
  })
}

export async function down(knex:Knex){
  return knex.schema.dropTable('funcionarios')
}