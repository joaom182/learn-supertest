import { Router } from 'express';
import BarController from './controllers/BarController';

const routes = Router();
const controller = new BarController();

routes.get('/test/:id', controller.index);

export { routes };
