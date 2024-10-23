import express from "express"
const router = express.Router()
//import {createWorkout,getAllWorkouts}  from  '../controllers/workoutsController.js'
import {createWorkout, getAllWorkouts,getWorkout,deleteWorkout,updateWorkout} from '../controllers/workoutsControllers.js'


//GET all workouts 
router.get('/', getAllWorkouts);

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

export default router;