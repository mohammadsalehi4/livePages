import mongoose from "mongoose";
var Schema = mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    followed:[{
        id:{
            type:String,
            required:true
        }
    }]
})

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User