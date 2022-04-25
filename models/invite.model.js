import mongoose from "mongoose"
const inviteSchema=new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    status:{
       type:String,
       required:true
    },ownedBy:{
        type:String,
       required:true
    },time:{
        type:Number,
        required:true
    }
})
const Invite = mongoose.model("Invite",inviteSchema);
export default Invite