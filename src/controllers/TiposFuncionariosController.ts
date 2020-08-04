import { Request,Response } from 'express'
import knex from '../database/connection'

class TiposFuncionariosController{
  async index(request: Request, response: Response) {
    const tipos_funcionarios = await knex('tipos_funcionarios').select('*')
    return response.json(tipos_funcionarios)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const tipos_funcionarios = await knex('tipos_funcionarios').where('id',id).first()
    if(!tipos_funcionarios){
      return response.status(400).json({message:"Tipo de funcionario não encontrado"})
    }
    return response.json(tipos_funcionarios)
  }

  async create(request: Request, response: Response) {
    const  {name} = request.body;
    const funcionario = {name}

    const trx = await knex.transaction()
    const insertedIds = await trx('tipos_funcionarios').insert(funcionario)
    const funcionario_id = insertedIds[0]
    await trx.commit()

    return response.json({
      id: funcionario_id,
      ...funcionario
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name } = request.body
    const resUpdate = await knex('tipos_funcionarios').where({id:id}).update({
      name
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    const resUpdate = await knex('tipos_funcionarios').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default TiposFuncionariosController