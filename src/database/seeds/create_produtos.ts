import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('produtos').insert([
        { name: 'Milho verde em conserva',expires:'2020-06-19T03:00:00.000Z', amount: 5},
        { name: 'Leite Integral',expires:'2020-04-19T03:00:00.000Z', amount: 2000},
        { name: 'Farinha de trigo',expires:'2020-06-12T03:00:00.000Z', amount: 2000},
        { name: 'Farinha de milho',expires:'2020-06-13T03:00:00.000Z', amount: 4300},
        { name: 'Sal',expires:'2020-12-15T03:00:00.000Z', amount: 1000},
        { name: 'Leite condensado',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Creme de leite',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Açucar',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Açucar cristal',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Ovos',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Cacau',expires:'2020-09-19T03:00:00.000Z', amount: 5000},
        { name: 'Chocolate em pó 30%',expires:'2020-10-19T03:00:00.000Z', amount: 1000},
        { name: 'Chocolate em pó 50%',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Essência de baunilha',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Essência de laranja',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Corante alimentício verde',expires:'2020-11-19T03:00:00.000Z', amount: 100},
        { name: 'Corante alimentício azul',expires:'2020-12-19T03:00:00.000Z', amount: 100},
        { name: 'Corante alimentício rosa',expires:'2020-12-19T03:00:00.000Z', amount: 100},
        { name: 'Corante alimentício roxo',expires:'2020-12-19T03:00:00.000Z', amount: 100},
        { name: 'Corante alimentício vermelho',expires:'2020-12-19T03:00:00.000Z', amount: 100},
        { name: 'Corante alimentício preto',expires:'2020-12-19T03:00:00.000Z', amount: 100},

        { name: 'Manteiga',expires:'2020-06-22T03:00:00.000Z', amount: 10000},
        { name: 'Leite Integral',expires:'2020-05-19T03:00:00.000Z', amount: 1000},
        { name: 'Passata de tomate',expires:'2020-09-20T03:00:00.000Z', amount: 2000},
        { name: 'Queijo Mussarela',expires:'2020-09-19T03:00:00.000Z', amount: 2000},
        { name: 'Creme de leite Fresco',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Iogurte natural',expires:'2020-11-19T03:00:00.000Z', amount: 2000},
        { name: 'Nata',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Ovos',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Ghee',expires:'2020-11-19T03:00:00.000Z', amount: 1000},
        { name: 'Geléia de morango',expires:'2020-11-19T03:00:00.000Z', amount: 200},
        { name: 'Geléia de framboesa',expires:'2020-11-19T03:00:00.000Z', amount: 200},
        { name: 'Abacaxi',expires:'2020-12-19T03:00:00.000Z', amount: 10},


        { name: 'Morangos congelados',expires:'2020-02-19T03:00:00.000Z', amount: 2000},
        { name: 'Calda de laranja',expires:'2020-11-19T03:00:00.000Z', amount: 500},
        { name: 'Banana congelada',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
        { name: 'Bacon',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
        { name: 'Calabresa',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
        { name: 'Polpa de goiaba',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
        { name: 'polpa de morango',expires:'2020-09-19T03:00:00.000Z', amount: 1000},
        { name: 'polpa de cupuaçu',expires:'2020-09-19T03:00:00.000Z', amount: 1000},
        { name: 'polpa de tamarindo',expires:'2020-09-19T03:00:00.000Z', amount: 1000},
        { name: 'Frutas Vermelhas',expires:'2020-09-19T03:00:00.000Z', amount: 1000},
        { name: 'Xarope simples',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
        { name: 'Polpa de Maracujá',expires:'2020-12-19T03:00:00.000Z', amount: 1000},
    ])
}