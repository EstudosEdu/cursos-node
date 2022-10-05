import { Router , Request, Response } from 'express';
import ProductController from './controller/ProductController';
const routes = Router();

routes.get('/products', ProductController.readAll);
routes.post('/product', ProductController.create);
routes.put('/product', ProductController.update);
routes.delete('/product', ProductController.delete);

export default routes;