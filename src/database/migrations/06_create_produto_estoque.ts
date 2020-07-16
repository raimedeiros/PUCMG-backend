import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('produto_estoque', table => {
    table.increments('id').primary();
    table.integer('produto_id')
    .notNullable()
    .references('id')
    .inTable('produtos')
    table.integer('estoque_id')
    .notNullable()
    .references('id')
    .inTable('estoques')
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('produto_estoque')
}