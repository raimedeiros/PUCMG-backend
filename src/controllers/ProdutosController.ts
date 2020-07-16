import {Request,Response} from 'express'
import knex from '../database/connection'

class ProdutosController{
  async index(request: Request, response: Response) {
    const estoques = await knex('produto_estoque')
    .select('produtos.*', 'estoques.name as estoque')
    .innerJoin('produtos','produto_estoque.produto_id','=','produtos.id')
    .innerJoin('estoques','produto_estoque.estoque_id','=','estoques.id')
    return response.json(estoques)
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
    const {name,expires,quantity,estoque} = request.body
    const produto = {name,expires,quantity}

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
    const {name, expires,quantity} = request.body
    const resUpdate = await knex('produtos').where({id:id}).update({
      name,
      expires,
      quantity
    })
    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}

export default ProdutosController