import { Request } from 'express';

const authorize = (req: Request) => {
  const { email, password } = req.body
  
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