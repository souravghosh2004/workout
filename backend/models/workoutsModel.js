import mongoose from "mongoose";

const Schema = mongoose.Schema

const workoutSchema =  new Schema(
    {
        title:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        day:{
            type:String,
            required:true
        }
    },{timestamps:true}
)

const Workout = mongoose.model('Workout',workoutSchema);

export default Workout;