import { Request,Response } from 'express'
import knex from '../database/connection'

class EstoquesController{
  async index(request: Request, response: Response) {
    const estoques = await knex('estoques').select('*')
    return response.json(estoques)
  }

  async create(request: Request, response: Response) {
    const  {name} = request.body;
    const estoque = {name}

    const trx = await knex.transaction()
    const insertedIds = await trx('estoques').insert(estoque)
    const estoque_id = insertedIds[0]
    await trx.commit()

    return response.json({
      id: estoque_id,
      ...estoque
    })
  }

  async update(request:Request,response:Response){
    const { id, name } = request.body
    const resUpdate = await knex('estoques').where({id:id}).update({
      "name" : name
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.body
    const resUpdate = await knex('estoques').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default EstoquesController