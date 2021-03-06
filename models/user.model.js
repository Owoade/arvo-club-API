
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true
    },
    joinedAt:{
      type:Number,
      required:true
    }
})

const User = mongoose.model("User", userSchema);
export default User