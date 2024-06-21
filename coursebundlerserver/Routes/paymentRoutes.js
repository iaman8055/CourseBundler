import express from 'express'
import { buySubscription, getRazorpayKey, paymentVerification } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
//Buy subscription
router.route("/subscribe").get(isAuthenticated,buySubscription)
//Verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification)
//Get Razorpay Key
router.route("/razorpay").get(isAuthenticated,getRazorpayKey);
export default router