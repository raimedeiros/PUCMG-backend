import { Request,Response } from 'express'
import { compare } from 'bcryptjs';
import knex from '../database/connection'
import { sign } from 'jsonwebtoken';
import AuthConfig from '../config/auth';


class AuthenticateUserController {
  async create(request: Request, response: Response) {

    try {
      const { email, password} = request.body;
    
      const funcionario = await knex('funcionarios')
        .where('email',email).first()

      const user = await knex('funcionario_tipoFuncionario')
      .where({'funcionario_id':funcionario.id})
      .innerJoin('funcionarios','funcionario_tipoFuncionario.funcionario_id','=','funcionarios.id')
      .innerJoin('tipos_funcionarios','funcionario_tipoFuncionario.tipoFuncionario_id','=','tipos_funcionarios.id')
      .select('funcionarios.*', 'tipos_funcionarios.id as type') 
      .first()
      
      if (!user) {
        return response.status(401).json({message:"Usuário ou senha incorretos"})
      }
      
      const passwordMathed = await compare(password, user.password);

      if (!passwordMathed) {
        return response.status(401).json({message:"Usuário ou senha incorretos"})
      }
      
      const { secret, expiresIn } = AuthConfig.jwt;
      const token = sign({}, secret, {
        subject: String(user.id),
        expiresIn,
      });
    
      delete user.password
      return response.json({ user, token });
    } catch (error) {
      return response.status(401).json({message:"Usuário ou senha incorretos"})
    }
  }

  async createFacebook(request: Request, response: Response) {

    try {
      const { dbUser, accessToken } = request.body;
      console.log(request.body)
      return response.json({ 
        user:{
          id:dbUser.id,
          name:dbUser.name,
          email:dbUser.email
        }, token:accessToken });
    } catch (error) {
      return response.status(401).json({message:"Usuário ou senha incorretos"})
    }
  }
}
export default AuthenticateUserController;
