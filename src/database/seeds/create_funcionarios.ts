import Knex from 'knex'
import {hash} from 'bcryptjs'

export async function seed(knex: Knex) {
    const password = await hash('123', 8);
    await knex('funcionarios').insert([
        { name: 'Gilberto Braga',email:"gilberto@user.user",password},
        { name: 'Felícia Braga',email:"felicia@user.user",password},
        { name: 'Maria Pacheco',email:"maria@user.user",password},
    ])
}