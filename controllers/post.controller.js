import { controllerParser } from "./global.controller.js";
import User from "../models/user.model.js";
import Member from "../models/member.model.js";
import Invite from "../models/invite.model.js";
import Notification from "../models/notification.model.js";
import Club from "../models/club.model.js";
export const createUser = (req,res)=>{
    controllerParser(req,res,async function(req,res){
       const user = new User(req.body);
       const newUser = await user.save();
       res.status(200).json(newUser)
    })
}

export const createMember=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const member = new Member(req.body);
       const newMember = await member.save();
       res.status(200).json(newMember)
    })
}
export const createInvite=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const invite = new Invite(req.body);
       const newInvite = await invite.save();
       res.status(200).json(newInvite)
    })
}
export const createNotification=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const notification = new Notification(req.body);
       const newNotification = await notification.save();
       res.status(200).json(newNotification)
    })
}
export const createClub=(req,res)=>{
    controllerParser(req,res,async function(req,res){
        const club = new Club(req.body);
       const newClub = await club.save();
       res.status(200).json(newClub)
    })
}
