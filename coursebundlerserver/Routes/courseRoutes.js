import express from 'express'
import {getAllCourses,createcourse, getcourselectures, addlecture} from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';
const router=express.Router();
//Get All courses without lectures
router.route('/courses').get(getAllCourses);

//Create New Course -only admin
router.route('/createcourse').post(singleUpload,createcourse);
//Add lecture, Delete Course, get CourseDetails
router.route('/course/:id').get(getcourselectures).post(singleUpload,addlecture);
export default router;