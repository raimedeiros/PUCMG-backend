import {Request,Response} from 'express'
import knex from '../database/connection'

class ProdutosController{
  async index(request: Request, response: Response) {
    const produtos = await knex('produtos').select('*')
    return response.json(produtos)
  }
  async show(request: Request, response: Response) {
    const {id} = request.params
    const produtos = await knex('produtos').where('id',id).first()
    if(!produtos){
      return response.status(400).json({message:"Estoque não encontrado"})
    }
    return response.json(produtos)
  }
  async create(request:Request, response:Response){
    const {name,expires,quantity} = request.body
    const produto = {name,expires,quantity}

    const trx = await knex.transaction()
    const insertedIds = await trx('produtos').insert(produto)
    const produto_id = insertedIds[0]
    trx.commit()

    return response.json({
      id: produto_id,
      ...produto
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