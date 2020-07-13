import { Request,Response } from 'express'
import knex from '../database/connection'

class FornecedoresController{
  async index(request: Request, response: Response) {
    const fornecedores = await knex('fornecedores').select('*')
    return response.json(fornecedores)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const fornecedores = await knex('fornecedores').where('id',id).first()
    if(!fornecedores){
      return response.status(400).json({message:"Fornecedor não encontrado"})
    }
    return response.json(fornecedores)
  }

  async create(request: Request, response: Response) {
    const  {name, address, phone} = request.body;
    const Fornecedor = {name, address, phone}

    const trx = await knex.transaction()
    const insertedIds = await trx('fornecedores').insert(Fornecedor)
    const Fornecedor_id = insertedIds[0]
    await trx.commit()

    return response.json({
      id: Fornecedor_id,
      ...Fornecedor
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name, address, phone } = request.body
    const resUpdate = await knex('fornecedores').where({id:id}).update({
      name, address, phone
    })

    if (resUpdate>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    const resUpdate = await knex('fornecedores').where("id",id).del()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default FornecedoresController