import Invite from "../models/invite.model.js";
import Member from "../models/member.model.js";
import { controllerParser } from "./global.controller.js";

export const deleteInvite= (req,res)=>{
    controllerParser(req,res,async function(req,res){
        Invite.findOneAndDelete({email:req.params.email,from:req.params.clubName},(err,docs)=>{
            if(err){
                throw new Error(err)
                return
            }
            res.status(200).json({deletedDoc:true});
        })
    })
}
export const deleteClubMember= (req,res)=>{
    controllerParser(req,res,async function(req,res){
        Member.findOneAndDelete({email:req.params.email,clubName:req.params.clubName},(err,docs)=>{
            if(err){
                throw new Error(err)
                return
            }
            res.status(200).json({deletedDoc:true});
        })
    })
}