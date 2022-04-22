import Sequelize from "sequelize";
import {config} from "dotenv";
import express from "express";

const app = express();
config()
const PORT = process.env.PORT || 3000


app.get("/",(req,res)=>{
    console.log("Anticipa")
})
const db = new Sequelize(process.env.DATABASE_URL,{
    dialect:"postgres"
});
const User = db.define("user",{
    name:Sequelize.STRING
})

app.listen(PORT,()=> console.log("DB and server running "))
