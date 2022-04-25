import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";
import Invite from "../models/invite.model.js";
import Member from "../models/member.model.js";
import Club from "../models/club.model.js";

import { controllerParser } from "./global.controller.js";

export const getAllUsers=(req,res)=>{
  controllerParser(req,res, async function(req,res){
    const user = await User.find();
    res.status(200).json(user)
  })
}

export const getUser=(req,res)=>{
    controllerParser(req,res,async function(req,res){
      const user = await User.find({email:req.params.email}).exec()
      res.status(200).json(user)
    })
  }   
export const getInviteById=(req,res)=>{
    controllerParser(req,res,async function(req,res){
      const invite = await Invite.find({_id:req.params.id}).exec()
      res.status(200).json(invite)
    })
}

export const getMembersByClubName = (req,res)=>{
    controllerParser(req,res,async function(req,res){
      const member = await Member.find({clubName:req.params.clubName}).sort({joinedAt:-1}).exec()
      res.status(200).json(member)
    })
}

export const getClubsByEmail=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const member = await Member.find({email:req.params.email}).sort({joinedAt:-1}).exec()
        res.status(200).json(member)
    })
}

export const getPendingInviteByClubName=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        Invite.find({from:req.params.clubName}).where({status:"pending"}).sort({time:-1})
        .exec(function(err,doc){
          if(err){
            throw new Error(err)
            return
          }
          res.status(200).json(doc)
        })
       
    })
}

export const getUserNotifications=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const notification = await Notification.find({to:req.params.email}).sort({time:-1}).exec();
        res.status(200).json(notification)
    })
}
export const getClubOwned=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const club = await Club.find({ownedBy:req.params.email}).sort({createdAt:-1}).exec();
        res.status(200).json(club)
    })
}
export const getClub=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const club = await Club.find({_id:req.params.id}).exec();
        res.status(200).json(club)
    })
}
