import ProductModel from "../model/ProductModel";
import { Response, Request } from 'express';

type ReqRes = Response | Request;

interface ProductControllerInterface{
    create(req: ReqRes, res: ReqRes): Promise<Response>;
    readAll(req: ReqRes, res: ReqRes): Promise<Response>;
    update(req: ReqRes, res: ReqRes): Promise<Response>;
    delete(req: ReqRes, res: ReqRes): Promise<Response>;
    teste(req: ReqRes, res: ReqRes): Promise<Response>;
}

class ProductController implements ProductControllerInterface {
    async create(req: Request, res: Response){
        try{
            const createdProduct = await ProductModel.create(req.body);
            return res.status(200).json(createdProduct);
        }catch(err){
            console.log(err);
            return res.status(500).json('Error');
        }
    }

    async readAll(req: Request, res: Response){
        try{
            const readAll = await ProductModel.find();
            return res.status(200).json(readAll);
        }catch(err){
            console.log(err);
            return res.status(500).json('Error');
        }
    }

    async update(req: Request, res: Response){
        try{
            if(!req.body.name || !req.body.price){
                return res.status(204).json({message: 'Data Invalided'});
            }
            await ProductModel.findByIdAndUpdate(req.body.id, {name: req.body.name});
            return res.status(200).json({message: 'Product Updated'});
        }catch(err){
            console.log(err);
            return res.status(500).json({Error: err});
        }
    }

    async delete(req: Request, res: Response){
        try{
            const productDelete = await ProductModel.findByIdAndDelete(req.body.id);

            if(!productDelete){
                return res.status(404).json({message: 'Product does not exists'});
            }

            return res.status(200).json({message: 'Product Deleted'});
        }catch(err){
            console.log(err);
            return res.status(500).json({Error: err});
        }
    }

    async teste(req: Request, res: Response){ //essa função retorna o numero de produtos cadatrados com um preço maior que o informado.
        const priceSelect = req.params.price;
        try{
            console.log(priceSelect);

            const productDelete = await ProductModel.aggregate([
                {$match: {price: {$gt: +priceSelect}}},
                {$group: {_id: '$_id', count: {$sum: 1}}} // $_id representa o campo _id de cada dado da tabela de produtos.
            ])

            return res.status(200).json(productDelete);
        }catch(err){
            console.log(err);
            return res.status(500).json({Error: err});
        }
    }
}

export default new ProductController();