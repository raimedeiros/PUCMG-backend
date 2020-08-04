import Knex from 'knex'
import {uuid} from 'uuidv4'

export async function seed(knex: Knex) {
    await knex('funcionarios').insert([
        { id:uuid(), name: 'Gilberto Braga'},
        { id:uuid(), name: 'Felícia Braga'},
        { id:uuid(), name: 'Maria Pacheco'},
        { id:uuid(), name: 'Elma Silva'},
        { id:uuid(), name: 'João Nascimento'},
        { id:uuid(), name: 'José Peixoto'},
    ])
}