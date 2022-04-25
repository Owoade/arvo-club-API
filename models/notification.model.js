import mongoose from "mongoose";
 const notificationSchema = new mongoose.Schema({
     to:{
         type:String,
         required:true
     },title:{
         type:String,
         required:true
     },
     body:{
         type:String,
         required:true
     },
     type:{
         type:String,
         required:true
     },
     read:{
         type:Boolean,
         required:true
     },time:{
         type:Number,
         required:true
     },payload:{
         type:Object
     }
 }) 

 const Notification = mongoose.model("Notification",notificationSchema);
 export default Notification