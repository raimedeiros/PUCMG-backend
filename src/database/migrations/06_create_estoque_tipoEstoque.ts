import Knex from 'knex'

export async function up(knex:Knex){
  return knex.schema.createTable('estoque_tipoEstoque', table => {
    table.increments('id').primary();
    table.integer('estoque_id')
    .notNullable()
    .references('id')
    .inTable('estoques')
    table.integer('tipoEstoque_id')
    .notNullable()
    .references('id')
    .inTable('tipos_estoques')
})
}

export async function down(knex:Knex) { 
  return knex.schema.dropTable('estoque_tipoEstoque')
}