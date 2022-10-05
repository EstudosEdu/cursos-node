import express, {Request, Response }  from 'express';
import DB from './db';
import routes from './routes';
const app = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //pesquisar sobre essa opção
app.use(routes);

DB();

app.get("/", async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);



app.listen(3000, (): void => {
    console.log(`Conectado com Sucesso, ${3000}`);
});