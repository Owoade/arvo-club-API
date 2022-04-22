import Sequelize from "sequelize";
import {config} from "dotenv";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000
config()

app.get("/",(req,res)=>{
    console.log("Anticipate")
})
const db = new Sequelize(process.env.DB_CONNECTION_STRING);
db.authenticate()
.then(app.listen(PORT,()=> console.log("DB and server running ")))
