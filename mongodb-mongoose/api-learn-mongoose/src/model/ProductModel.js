import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id: {type: ObjectId},
    name: {type: String, required: true},
    price: {type: Number, required: true}
});

const ProductModel = mongoose.model('products', ProductSchema)

export default ProductModel;