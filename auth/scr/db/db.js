import mongoose from "mongoose";
import config from "../config/config.js";

async function connectDB() {
    try{
        await mongoose.connect(config.MONGO_URI)
        .then(()=>{
            console.log("connected to db")
        })
    }catch(err){
        console.error("error connected to db",err);
    }
    
}

export default connectDB;