import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String
    },clubName:{
        type:String,
        required:true
    },
    joinedAt:{
      type:Number,
      required:true
    }
})

const Member = mongoose.model("Member",memberSchema);
export default Member