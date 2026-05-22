import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        Type :String,
        required: true,
        unique:true
    },
    fullname:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
            
        }
    },
    password:{
        type:String,
        required:()=>!this.googleId
    },
    googleId:{
        type:String
    },
    role:{
        type:String,
        enum:["user","artist"],
        default:"user"
    }
},{timestamps: true})

const userModel = mongoose.model("user",userSchema)

export default userModel;