import { Router , Request, Response } from 'express';
import ProductController from './controller/ProductController';
const routes = Router();

routes.get('/products', (req: Request, res:Response) => {
    return res.status(200).json({message: 'products on'});
});

routes.post('/product', ProductController.create);

export default routes;