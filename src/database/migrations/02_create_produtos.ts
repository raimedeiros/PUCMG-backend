import Knex from 'knex'
export async function up(knex: Knex) {
    return knex.schema.createTable('produtos', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('expires').notNullable();
        table.integer('amount').notNullable();
    })
 }

export async function down(knex:Knex) { 
    return knex.schema.dropTable('produtos')
}