import mongoose from "mongoose";
const senha: String = 'edujr298101';

async function DB():Promise<void> {
    mongoose.connect(`mongodb+srv://EduJr4:${senha}@cluster1.wy1dh39.mongodb.net/?retryWrites=true&w=majority`, (err) => {
        if(err) console.log(err)
        else console.log("mongdb is connected");
        });
}

export default DB;