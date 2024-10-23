//require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from "express";
import workoutsRouter from "./routes/workouts.js";




//express app
const app = express();

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,  req.method);
    next()

})

//routes
app.use('/api/workouts',workoutsRouter)

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(() => {
    //lisent for request
app.listen(process.env.PORT, () => {
    console.log("DB connection successfully && app running in port ",process.env.PORT);
})
})
.catch((error) =>{
    console.log(error)
})

