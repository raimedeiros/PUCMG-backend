import { Request, Response } from 'express'
import knex from '../database/connection'
import {uuid} from 'uuidv4'

class FuncionariosController{
  async index(request: Request, response: Response) {
    const funcionarios = await knex('funcionario_tipoFuncionario')
    .innerJoin('funcionarios','funcionario_tipoFuncionario.funcionario_id','=','funcionarios.id')
    .innerJoin('tipos_funcionarios','funcionario_tipoFuncionario.tipoFuncionario_id','=','tipos_funcionarios.id')
    .select('funcionarios.*', 'tipos_funcionarios.name as type')

    return response.json(funcionarios)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const funcionario = await knex('funcionarios').where('id',id).first()
    if(!funcionario){
      return response.status(400).json({message:"Funcionario não encontrado"})
    }
    const tipo_funcionario = await knex('tipos_funcionarios')
    .join('funcionario_tipoFuncionario','tipos_funcionarios.id','=','funcionario_tipoFuncionario.tipoFuncionario_id')
    .where('funcionario_tipoFuncionario.funcionario_id',id)
    .select('tipos_funcionarios.name as tipo')
    return response.json({funcionario,tipo_funcionario})
  }
  
  async create(request: Request, response: Response) {
    const  {name,type} = request.body;
    const funcionario = {
      id:uuid(),
      name
    }

    const trx = await knex.transaction()
    const insertedIds = await trx('funcionarios').insert(funcionario)

    if (insertedIds){
      const tipo_funcionario = {funcionario_id:funcionario.id,tipoFuncionario_id:type}
      await trx('funcionario_tipoFuncionario').insert(tipo_funcionario)
      await trx.commit()
      return response.json({
        ...funcionario
      })
    }
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name, type } = request.body

    const trx = await knex.transaction()
    let resUpdateFuncionario = await trx('funcionarios').where({id:id}).update({name})
    
    if(type){
      const resUpdateTipoFuncionario = await trx('funcionario_tipoFuncionario')
      .where({funcionario_id: id}).update({tipoFuncionario_id:type})
      resUpdateTipoFuncionario<0 ? resUpdateFuncionario=resUpdateTipoFuncionario : resUpdateFuncionario
    }
    await trx.commit()

    if (resUpdateFuncionario>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    
    const trx = await knex.transaction()
    await trx('funcionario_tipoFuncionario').where('funcionario_id',id).del()
    const resUpdate = await trx('funcionarios').where("id",id).del()
    await trx.commit()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default FuncionariosController