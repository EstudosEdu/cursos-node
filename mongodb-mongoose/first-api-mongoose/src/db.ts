import mongoose from "mongoose";

async function DB(){
    await mongoose.connect('mongodb://localhost:27017/aprendendo-mongo',(err) => {
        if(err) console.log(err) 
        else console.log("mongdb is connected");
       });
}

export default DB;