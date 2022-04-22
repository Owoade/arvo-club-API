import Sequelize from "sequelize";
import {config} from "dotenv";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000
config()

app.get("/",(req,res)=>{
    console.log("Anticipa")
})
const db = new Sequelize(process.env.DATABASE_URL,{
    dialect:"postgres"
});
db.authenticate()
.then(app.listen(PORT,()=> console.log("DB and server running ")))
