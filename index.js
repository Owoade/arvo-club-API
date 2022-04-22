import Sequelize from "sequelize";
import {config} from "dotenv";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000
config()

app.get("/",(req,res)=>{
    console.log("Anticipate")
})
const db = new Sequelize('de2tehpiej95dn', 'tyuspqwaarrzgb', '61470c48741495322929045749008883970be6bd7512757bd752d9060ef5c257', {
    host: 'ec2-44-199-143-43.compute-1.amazonaws.com',
    dialect:  'postgres' 
  })
db.authenticate()
.then(app.listen(PORT,()=> console.log("DB and server running ")))
