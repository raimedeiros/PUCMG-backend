import { Request,Response } from 'express'
import knex from '../database/connection'

class EstoquesController{
  async index(request: Request, response: Response) {
    const estoques = await knex('estoque_tipoEstoque')
    .select('estoques.*', 'tipos_estoques.name as tipo')
    .innerJoin('estoques','estoque_tipoEstoque.estoque_id','=','estoques.id')
    .innerJoin('tipos_estoques','estoque_tipoEstoque.tipoEstoque_id','=','tipos_estoques.id')
    return response.json(estoques)
  }

  async show(request: Request, response: Response) {
    const {id} = request.params
    const estoque = await knex('estoques').where('id',id).first()
    if(!estoque){
      return response.status(400).json({message:"Estoque não encontrado"})
    }
    const tipo_estoque = await knex('tipos_estoques')
    .join('estoque_tipoEstoque','tipos_estoques.id','=','estoque_tipoEstoque.tipoEstoque_id')
    .where('estoque_tipoEstoque.estoque_id',id)
    .select('tipos_estoques.name as tipo')
    return response.json({estoque,tipo_estoque})
  }
  
  async create(request: Request, response: Response) {
    const  {name,type} = request.body;
    const estoque = {name}

    const trx = await knex.transaction()
    const insertedIds = await trx('estoques').insert(estoque)
    const estoque_id = insertedIds[0]

    const tipo_estoque = {estoque_id,tipoEstoque_id:type}
    await trx('estoque_tipoEstoque').insert(tipo_estoque)
    await trx.commit()

    return response.json({
      id: estoque_id,
      ...estoque
    })
  }

  async update(request:Request,response:Response){
    const {id} = request.params
    const { name, type } = request.body

    const trx = await knex.transaction()
    let resUpdateEstoque = await trx('estoques').where({id:id}).update({name})
    
    if(type){
      const resUpdateTipoEstoque = await trx('estoque_tipoEstoque')
      .where({estoque_id: id}).update({tipoEstoque_id:type})
      resUpdateTipoEstoque<0 ? resUpdateEstoque=resUpdateTipoEstoque : resUpdateEstoque
    }
    await trx.commit()

    if (resUpdateEstoque>0){
      return response.status(200).json({message: 'item atualizado'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }

  async delete(request:Request, response: Response){
    const { id } = request.params
    
    const trx = await knex.transaction()
    await trx('estoque_tipoEstoque').where('estoque_id',id).del()
    const resUpdate = await trx('estoques').where("id",id).del()
    await trx.commit()
    if (resUpdate>0){
      return response.status(200).json({message: 'item removido'})
    }
    return response.status(400).json({ message: 'item inexistente'})
  }
}
export default EstoquesController