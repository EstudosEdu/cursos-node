import ProductModel from "../model/ProductModel";
import e, {Response, Request} from 'express';

interface ProductControllerInterface{
    create: Function;
}

class ProductController<ProductControllerInterface> {
    async create(req: Request, res: Response){
        try{
            const createdProduct = await ProductModel.create(req.body);
            console.log('foi!');
            return res.status(200).json(createdProduct);
        }catch(err){
            console.log(err);
            return res.status(500).json('Error');
        }
    }
}

export default new ProductController();