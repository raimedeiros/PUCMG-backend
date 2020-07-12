import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('desperdicios', table => {
    table.increments('id').primary();
    table.integer('produto').notNullable();
    table.string('quantidade').notNullable();
    table.string('razao').notNullable();
    table.date('data').notNullable();
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('desperdicios')
}