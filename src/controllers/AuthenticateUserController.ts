import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import AuthConfig from '../config/auth';
import knex from '../database/connection'

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: {
    id:number,
    name:string,
    email:string,
    password:string
  };
  token: string;
}

class AuthenticateUserController {
  public async execute({ email, password }: Request): Promise<Response> {
    const user = await knex('funcionarios').where('email',email).first()

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMathed = await compare(password, user.password);

    if (!passwordMathed) {
      throw new Error('Incorrect email/password combination.');
    }

    const { secret, expiresIn } = AuthConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    delete user.password
    return { user, token };
  }
}
export default AuthenticateUserController;
