import mongoose, { ObjectId, Document, Schema, model } from 'mongoose';


const PostSchema = new Schema({
    title: String,
    body: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

export default model('Post', PostSchema);