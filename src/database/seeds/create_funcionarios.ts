import Knex from 'knex'
import {uuid} from 'uuidv4'

export async function seed(knex: Knex) {
    await knex('funcionarios').insert([
        { id:uuid(), name: 'Gilberto Braga',type:'Gerente'},
        { id:uuid(), name: 'Felícia Braga',type:'Gerente'},
        { id:uuid(), name: 'Maria Pacheco',type:'Funcionário'},
        { id:uuid(), name: 'Elma Silva',type:'Funcionário'},
        { id:uuid(), name: 'João Nascimento',type:'Funcionário'},
        { id:uuid(), name: 'José Peixoto',type:'Funcionário'},
    ])
}