import { Request, Response } from 'express'
import knex from '../database/connection'
import {uuid} from 'uuidv4'

class FuncionariosController{

  async index(request:Request, response:Response) {
    const funcionarios = await knex('funcionarios').select('*')
    return response.json(funcionarios)
  }

    async show(request: Request, response: Response) {
    const {id} = request.params
    const funcionario = await knex('funcionarios').where('id',id).first()
    if(!funcionario){
      return response.status(400).json({message:"Funcionário não encontrado"})
    }
    return response.json(funcionario)
  }

  async create(request: Request, response: Response) {
    const  {name, type} = request.body;
    const funcionario = {id:uuid(),name,type}

    const trx = await knex.transaction()
    await trx('funcionarios').insert(funcionario)
    await trx.commit()

    return response.json({
      funcionario
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name,type } = request.body
    const resUpdate = await knex('funcionarios').where({id:id}).update({
      "name" : name,
      "type" : type
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    const resUpdate = await knex('funcionarios').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default FuncionariosController