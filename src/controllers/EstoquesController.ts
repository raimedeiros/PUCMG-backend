import { Request,Response } from 'express'

class EstoquesController{
  async index(request: Request, response: Response) {
    return response.json({message:'success config'})
  }
}
export default EstoquesController