import mongoose from "mongoose";


const clubSchema = new mongoose.Schema({
    ownedBy:{
        type:String,
        required:true
    },
    clubName:{
        type:String,
        required:true
    },
    createdAt:{
        type:Number,
        required:true
    }
})

const Club = mongoose.model("Club",clubSchema)
export default Club