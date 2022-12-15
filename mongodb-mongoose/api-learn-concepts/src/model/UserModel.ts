import mongoose, {Schema, ObjectId, model} from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

export default model('User', UserSchema);