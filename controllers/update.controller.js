import Notification from "../models/notification.model.js";
import Invite from "../models/invite.model.js";
import { controllerParser } from "./global.controller.js";

export const updateInvite=(req,res)=>{
    controllerParser(req,res,async()=>{
        const {filter,update}=req.body
        Invite.findOneAndUpdate(filter,update,{new:true},(err,doc)=>{
            if(err){
                throw new Error(err)
                return
            }
            res.status(200).json(doc)
        })
    })
}

export const setNoticationToStale=(req,res)=>{
   const {filter,update}=req.body
   controllerParser(req,res,async()=>{
    Notification.findOneAndUpdate(filter,update,{new:true},(err,doc)=>{
        if(err){
            throw new Error(err)
            return 
        }
        res.status(200).json(doc)
    })
   })
  
} 