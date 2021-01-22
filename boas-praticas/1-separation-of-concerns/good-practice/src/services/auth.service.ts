// no more this dependency
//import { Request } from 'express';

interface IAuth {
  email: String;
  password: String;
}

const authorize = (data: IAuth) => {
  const { email, password } = data;
  
  if (!email || !password) {
    throw new Error("Dados inválidos");
  }
  
  return {
    sucess: true,
    data: {
      user: { email }
    }
  }
}

export default {
  authorize
}