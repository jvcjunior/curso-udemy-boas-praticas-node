import { Router } from 'express';
import authController from './controllers/auth.controller';

const routes = Router();

routes.post('/auth', authController.authorize);

export default routes;