import mongoose from "mongoose";
const senha = 'edujr298101';
async function DB(){
    mongoose.connect(`mongodb+srv://EduJr4:${senha}@cluster1.wy1dh39.mongodb.net/test`, (err) => {
        if(err) console.log(err)
        else console.log("mongdb is connected");
        });
}

export default DB;
