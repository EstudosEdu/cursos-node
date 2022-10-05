import mongoose, { Model, ObjectId, Document, Schema } from "mongoose";

/*link da solução abaixo: https://github.com/Automattic/mongoose/issues/10623 */
interface Product extends Document<ObjectId>{
  id: ObjectId[];
  name: String;
}

const ProductSchema = new Schema<Product>({
  id: {type: [Schema.Types.ObjectId], required: true},
  name: {type: String, required: true}
});

const ProductModel = mongoose.model('products', ProductSchema);

export default ProductModel;

// ========================================================================================== 
 
/*Não entendi muito sobre a solução abaixo, recomendo ver o video onde ele foi feito: https://www.youtube.com/watch?v=zizFYLlRd2Q*/
  
  // export interface Product {
//   _id?: string;
//   name: string;
//   price: string;
// }

// const schema = new mongoose.Schema(
//   {
//     name: {type: String, required: true},
//     price: {type: String, required: true}
//   },
//   {
//     toJSON: {
//       transform: (_, ret): void => {
//         ret.id = ret._id;
//         delete ret._id;
//         delete ret._v;
//       }
//     }
//   }
// )

// interface ProductModel extends Omit<Product, '_id'>, Document {}
// export const Product: Model<ProductModel> = mongoose.model('Product', schema);