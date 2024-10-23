import { isValidObjectId } from "mongoose";
import Workout from "../models/workoutsModel.js"

// get all workouts
const  getAllWorkouts = async (req, res) => {
   const workouts = await Workout.find({}).sort({createdAt : -1})
   res.status(200).json(workouts);

}


//get a single workout
const getWorkout = async (req,res) => {
    const {id} =  req.params;
    if(!isValidObjectId(id)){
      return  res.status(404).json({error : "Please enter a valid id "});
    }
    //onst workout = await Workout.findById(id);
    const workout = await Workout.findById(id);
    if(!workout){
      return  res.status(404).json({error : "No workout find  with this id"})

    }

    res.status(200).json(workout)

}

//create a workout
const createWorkout = async (req, res) => {
    const {title,duration,day} = req.body

    try{
        const workout = await Workout.create({title,duration,day})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete  a workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    if(!isValidObjectId(id)){
        return  res.status(404).json({error : "Please enter a valid id "});
    }
    const  workout = await Workout.findByIdAndDelete(id);

    if(!workout){
        return res.status(404).json({error : "No workout find  with this id"})
    }
    res.status(200).json(workout);
}

//update a workout
const updateWorkout = async (req,res) => {
    const {id} = req.params;
    if(!isValidObjectId(id)){
        return res.status(404).json({error : "Please enter a valid id "});
    }
    const workout = await Workout.findByIdAndUpdate(id, req.body,{new:true});

    if(!workout){
        return res.status(404).json({error : "No workout find  with this id"})
    }
    
    res.status(200).json(workout); // Add this line to send the response
}

//export all  functions
export {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}