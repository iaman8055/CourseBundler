import express from 'express'
import { buySubscription, cancelSubcription, getRazorpayKey, paymentVerification } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router();
//Buy subscription
router.route("/subscribe").get(isAuthenticated,buySubscription)
//Verify Payment and save reference in database
router.route("/paymentverification").post(isAuthenticated,paymentVerification)
//Get Razorpay Key
router.route("/razorpay").get(isAuthenticated,getRazorpayKey);
//Cancel Subscription
router.route('/subscribe/cancel').delete(isAuthenticated,cancelSubcription);
export default router