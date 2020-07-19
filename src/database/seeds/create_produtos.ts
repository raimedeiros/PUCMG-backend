import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produtos').insert([
        { name: 'Milho verde em conserva',expires:'2020/12/30', amount: 5},
        { name: 'Leite Integral',expires:'2020/11/30', amount: 15},
        { name: 'Farinha de trigo',expires:'2020/11/08', amount: 2},
        { name: 'Farinha de milho',expires:'2020/07/08', amount: 34},
        { name: 'Sal',expires:'2021/11/08', amount: 14},
        { name: 'Açucar',expires:'2022/11/08', amount: 22},
        { name: 'Manteiga',expires:'2020/11/08', amount: 30},
        { name: 'Leite Integral',expires:'2020/11/08', amount: 2},
        { name: 'Passata de tomate',expires:'2020/01/08', amount: 2},
        { name: 'Queijo Mussarela',expires:'2020/11/08', amount: 5},
        { name: 'Repolho',expires:'2020/11/08', amount: 2},
        { name: 'Salmão',expires:'2020/11/08', amount: 2},
        { name: 'Carne moída',expires:'2020/11/08', amount: 5},
        { name: 'Salsicha',expires:'2020/11/08', amount: 4},
    ])
}