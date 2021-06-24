import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService { 
  async execute({ email, password}: IAuthenticateRequest) {

    const userRepositories = getCustomRepository(UserRepositories);

    // Verificar se email existe
    const user = await userRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);
    
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    // Gerar token
    // API_KEY gerada pelo comando = node -e "console.log( require('crypto').randomBytes(256).toString('base64'))"
    const token = sign(
      {
        email: user.email
      }, 
      process.env.API_KEY,
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService }