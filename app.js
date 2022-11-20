require("module-alias/register")
const express= require('express');
const apiRoute =require("@routes-v1")
const cors = require("cors");

require("dotenv").config();

const app=express();
app.use(cors())
app.use(express.urlencoded({limit:"1000kb", extended:false}))
app.use(express.json({limit:'1000kb'}))

app.use("/api/v1",apiRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`App started at port ${process.env.PORT}`)
})