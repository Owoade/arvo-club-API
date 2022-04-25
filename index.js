import Sequelize from "sequelize";
import {config} from "dotenv";
import express from "express";
import cors from "cors";
import os from "os";
import mongoose from "mongoose"
import postRoutes from "./routes/post.routes.js";
import getRoutes from "./routes/get.routes.js";
import updateRoutes from "./routes/update.routes.js";
import deleteRoutes from "./routes/delete.routes.js";
import cluster from "cluster"
const app = express();
config()

const PORT = process.env.PORT || 2022
app.use(getRoutes)
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(postRoutes);
app.use(updateRoutes);
app.use(deleteRoutes)
app.get("/",(req,res)=>{
    console.log("Anticipate !!!")
})


// Creates an Immortal server 
if(cluster.isPrimary){
    for(let i=0;i<=4;i++){
        // creates five instances of the server
        cluster.fork()
    }
    cluster.on("exit",(worker,code,signal)=>{
        // In case of an error the affected workers dies and another takes it place
        console.log(`worker ${worker.process.pid} died`)
        cluster.fork()
    })
}else{
       mongoose.connect(process.env.DATABASE_CONNECTION_STRING).then(app.listen(PORT,()=> console.log("Server running" + process.pid)))   
       
}
