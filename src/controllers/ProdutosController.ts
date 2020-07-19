import {Request,Response} from 'express'
import knex from '../database/connection'

class ProdutosController{
  async index(request: Request, response: Response) {
    const {estoque} = request.query
    const produtos = await knex('produto_estoque')
    .select('produtos.*', 'estoques.name as estoque_name', 'estoques.id as estoque_id')
    .innerJoin('produtos','produto_estoque.produto_id','=','produtos.id')
    .innerJoin('estoques','produto_estoque.estoque_id','=','estoques.id')
  
    const filteredProdutos = produtos.filter(produto=>produto.estoque_id==estoque)
    
    return response.json(estoque ? filteredProdutos: produtos)
  }
  async show(request: Request, response: Response) {
    const {id} = request.params
    const produtos = await knex('produtos').where('id',id).first()
    if(!produtos){
      return response.status(400).json({message:"Estoque não encontrado"})
    }
    const estoque = await knex('estoques')
    .join('produto_estoque','estoques.id','=','produto_estoque.estoque_id')
    .where('produto_estoque.produto_id',id)
    .select('estoques.name as tipo')
    return response.json({produtos,estoque})
  }
  async create(request:Request, response:Response){
    const {name,expires,amount,estoque} = request.body
    const produto = {name,expires,amount}

    const trx = await knex.transaction()
    const insertedIds = await trx('produtos').insert(produto)
    const produto_id = insertedIds[0]

    const produto_estoque = {produto_id,estoque_id:estoque}
    await trx('produto_estoque').insert(produto_estoque)

    trx.commit()

    return response.json({
      id: produto_id,
      ...produto,
      estoque: estoque
    })  
  }
  async update(request:Request, response:Response){
    const {id} = request.params
    const {name, expires,amount} = request.body
    const resUpdate = await knex('produtos').where({id:id}).update({
      name,
      expires,
      amount
    })
    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}

export default ProdutosController