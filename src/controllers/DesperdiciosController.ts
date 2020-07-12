import { Request,Response } from 'express'
import knex from '../database/connection'

class DesperdiciosController{
  async index(request: Request, response: Response) {
    const desperdicios = await knex('desperdicios').select('*')
    return response.json(desperdicios)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const desperdicios = await knex('desperdicios').where('id',id).first()
    if(!desperdicios){
      return response.status(400).json({message:"Desperdicio não encontrado"})
    }
    return response.json(desperdicios)
  }

  async create(request: Request, response: Response) {
    const  {produto,quantidade,data,razao} = request.body;
    const desperdicio = {produto,quantidade,data,razao}

    const trx = await knex.transaction()
    const insertedIds = await trx('desperdicios').insert(desperdicio)
    const desperdicio_id = insertedIds[0]
    await trx.commit()

    return response.json({
      id: desperdicio_id,
      ...desperdicio
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { produto,quantidade,data,razao } = request.body
    const resUpdate = await knex('desperdicios').where({id:id}).update({
      produto,
      quantidade,
      data,
      razao
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    const resUpdate = await knex('desperdicios').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default DesperdiciosController