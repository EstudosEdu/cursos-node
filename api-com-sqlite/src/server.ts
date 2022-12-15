import Express from "express";
import openDB from './configDb'
import UserController from "./controllers/userController";
const app = Express();

openDB();
app.use(Express.json());
app.get('/', UserController.createTable);
app.post('/register', UserController.register);
app.put('/update', UserController.update);
app.delete('/delete/:id', UserController.delete);

app.listen(3333, ()=> console.log('Server is running...'));