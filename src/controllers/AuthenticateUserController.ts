import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AuthConfig from '../config/auth';
import knex from '../database/connection'
import { Request,Response } from 'express'


class AuthenticateUserController {
  async create(request: Request, response: Response) {

    try {
      const { email, password } = request.body;
    
      const user = await knex('funcionarios').where('email',email).first()
      
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
}
export default AuthenticateUserController;
