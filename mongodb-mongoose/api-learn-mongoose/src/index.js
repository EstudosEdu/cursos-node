import express from 'express';
const app = express();
import routes from './routes.js';
import DB from './database/db.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //pesquisar sobre essa opção
app.use(routes);
DB();

app.get("/", async (req, res) => {
    return res.status(200).send({
        message: "Hello World!",
    });
}
);


app.listen(3000, () => {
    console.log('Conectado com sucesso, porta:', 3000);
})