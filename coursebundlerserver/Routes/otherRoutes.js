import express from "express";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";
import { AuthorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
//contact form
router.route('/contact').post(contact)
//Request Form
router.route('/courserequest').post(courseRequest)
//Get admin dashboard stats
router.route('/admin/stats').get(isAuthenticated,AuthorizeAdmin,getDashboardStats)

export default router;