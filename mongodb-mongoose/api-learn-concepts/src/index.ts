import express from 'express';
const app = express();
import routes from './routes/routes';
import DB from './database/db';

app.use(express.json());
app.use(express.urlencoded({extended: true})); //pesquisar sobre essa linha de codigo
app.use(routes);

DB();

app.listen(3000, () => {
    console.log('serve is running: http://localhost:3000'); 
});