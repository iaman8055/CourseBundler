import express from 'express'
import {getAllCourses,createcourse, getcourselectures, addlecture, deleteCourse, deleteLecture} from '../controllers/courseController.js';
import singleUpload from '../middlewares/multer.js';
import { AuthorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
const router=express.Router();
//Get All courses without lectures
router.route('/courses').get(getAllCourses);

//Create New Course -only admin
router.route('/createcourse').post(isAuthenticated,AuthorizeAdmin,singleUpload,createcourse);
//Add lecture, Delete Course, get CourseDetails
router.route('/course/:id')
.get(isAuthenticated,getcourselectures)
.post(isAuthenticated,AuthorizeAdmin,singleUpload,addlecture)
.delete(isAuthenticated,AuthorizeAdmin,deleteCourse)

//delete lecture
router.route('/lecture').delete(deleteLecture);
export default router;


 