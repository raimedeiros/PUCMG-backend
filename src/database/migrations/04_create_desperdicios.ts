import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('desperdicios', table => {
    table.increments('id').primary();
    table.integer('product').notNullable();
    table.string('amount').notNullable();
    table.string('reason').notNullable();
    table.date('date').notNullable();
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('desperdicios')
}