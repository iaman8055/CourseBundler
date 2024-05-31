import express from 'express'
import {getAllCourses,createcourse} from '../controllers/courseController.js';
const router=express.Router();
//Get All courses without lectures
router.route('/courses').get(getAllCourses);

//Create New Course -only admin
router.route('/createcourse').post(createcourse);

export default router;