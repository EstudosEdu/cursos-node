import ProductModel from "../model/ProductModel.js";

class ProductController {
    async create(req, res){
        const {name, price} = req.body;
        try{
            if(!name || !price){
                return res.status(204).json({message: 'Data Invalided'});
            }

            const createdProduct = await ProductModel.create(req.body);
            return res.status(200).json(createdProduct);
        }catch(err){
            console.log(err);
            return res.status(500).json({Error: err});
        }
    }

    async readAll(req, res){
        try{
            const readAll = await ProductModel.find();
            return res.status(200).json(readAll);
        }catch(err){
            console.log(err);
            return res.status(500).json({Error: err});
        }
    }

    async update(req, res){
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

    async delete(req, res){
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

}

export default new ProductController();