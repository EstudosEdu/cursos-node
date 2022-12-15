import {Router} from 'express';
const routes = Router();
import UserController from '../controller/UserController';
import PostController from '../controller/PostController';

routes.post('/createUser', UserController.create);
routes.get('/readOne/:id', UserController.readOne);
routes.get('/readAll', UserController.readAll);

routes.get('/', (req, res) => {
    return res.json('Hello World');
});

export default routes;