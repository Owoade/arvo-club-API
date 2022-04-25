import cors from "cors"
import {Router } from "express"
import * as DC from "../controllers/delete.controllers.js" //DC means Delete Controllers;

const deleteRoutes = Router();
deleteRoutes.use(cors({
    origin: "*"
}))

deleteRoutes.get("/delete-invite/:email/:clubName",(req,res)=>{
    DC.deleteInvite(req,res)
})
deleteRoutes.get("/remove-member/:email/:clubName",(req,res)=>{
    DC.deleteClubMember(req,res)
})

export default deleteRoutes