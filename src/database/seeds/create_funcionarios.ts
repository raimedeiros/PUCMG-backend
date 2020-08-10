import Knex from 'knex'
import {hash} from 'bcryptjs'

export async function seed(knex: Knex) {
    const password = await hash('PUCMG', 8);
    await knex('funcionarios').insert([
        { name: 'Gilberto Braga',email:"gilberto@despensa.com",password},
        { name: 'Felícia Braga',email:"felicia@espensa.com",password},
        { name: 'Maria Pacheco',email:"maria@espensa.com",password},
    ])
}