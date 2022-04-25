import  { Router } from "express"
import cors from "cors"
import * as GC from "../controllers/get.controller.js" //GC means Get Controllers

const getRoutes = Router();

getRoutes.use(cors({
    origin: "*"
}))

getRoutes.get("/get-all-users",(req,res)=>{
    GC.getAllUsers(req,res)
})

getRoutes.get("/get-user/:email",(req,res)=>{
    GC.getUser(req,res)
})
getRoutes.get("/get-club/:id",(req,res)=>{
    GC.getClub(req,res)
})
getRoutes.get("/get-invite/:id",(req,res)=>{
    GC.getInviteById(req,res)
})
getRoutes.get("/get-members-by-clubName/:clubName",(req,res)=>{
    GC.getMembersByClubName(req,res)
})

getRoutes.get("/get-clubs-by-email/:email",(req,res)=>{
    GC.getClubsByEmail(req,res);
})

getRoutes.get("/get-pending-invite-by-clubName/:clubName",(req,res)=>{
    GC.getPendingInviteByClubName(req,res)
})
getRoutes.get("/get-user-notifications/:email",(req,res)=>{
    GC.getUserNotifications(req,res)
})
getRoutes.get("/get-clubs-owned-by-user/:email",(req,res)=>{
    GC.getClubOwned(req,res)
})


export default getRoutes
