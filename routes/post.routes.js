import cors from "cors"
import express,{Router} from "express";
import * as PC from "../controllers/post.controller.js" //PC means Post Controllers

const postRoutes = Router();
postRoutes.use(cors({
    origin: "*"
}))

postRoutes.post("/create-user",(req,res)=>{
  PC.createUser(req,res)
})

postRoutes.post("/create-member",(req,res)=>{
    PC.createMember(req,res)
})

postRoutes.post("/create-invite",(req,res)=>{
    PC.createInvite(req,res);
})
postRoutes.post("/create-notification",(req,res)=>{
    PC.createNotification(req,res);
})
postRoutes.post("/create-club",(req,res)=>{
    PC.createClub(req,res);
})


export default postRoutes