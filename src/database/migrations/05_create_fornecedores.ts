import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('fornecedores', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('fornecedores')
}