import { Request,Response } from 'express'
import knex from '../database/connection'

class EstoquesController{
  async index(request: Request, response: Response) {
    const tipos_estoques = await knex('tipos_estoques').select('*')
    return response.json(tipos_estoques)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const tipos_estoques = await knex('tipos_estoques').where('id',id).first()
    if(!tipos_estoques){
      return response.status(400).json({message:"Tipo de estoque não encontrado"})
    }
    return response.json(tipos_estoques)
  }

  async create(request: Request, response: Response) {
    const  {name} = request.body;
    const estoque = {name}

    const trx = await knex.transaction()
    const insertedIds = await trx('tipos_estoques').insert(estoque)
    const estoque_id = insertedIds[0]
    await trx.commit()

    return response.json({
      id: estoque_id,
      ...estoque
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name } = request.body
    const resUpdate = await knex('tipos_estoques').where({id:id}).update({
      "name" : name
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    const resUpdate = await knex('tipos_estoques').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default EstoquesController