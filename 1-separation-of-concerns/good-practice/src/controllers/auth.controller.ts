import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';

const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(authService.authorize(req.body));
  } catch (error) {
    next(error)
  }
}

export default {
  authorize
}