import cors from "cors" 
import {Router } from "express"
import * as UC from "../controllers/update.controller.js" //UC means update controllers;

const updateRoutes = Router();
updateRoutes.use(cors({
    origin: "*"
}))

updateRoutes.post("/update-invite",(req,res)=>{
    UC.updateInvite(req,res)
})
updateRoutes.post("/update-notification",(req,res)=>{
    UC.setNoticationToStale(req,res)
})

export default updateRoutes