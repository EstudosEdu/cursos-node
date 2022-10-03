import express, {Request, Response }  from 'express';
const app = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //pesquisar sobre essa opção

app.get("/", async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);



app.listen(3000, (): void => {
    console.log(`Conectado com Sucesso, ${3000}`);
});