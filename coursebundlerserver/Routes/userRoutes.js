import express from 'express'
import { login, register,logout, getMyprofile, changepassword, updateProfile, forgotPassword, resetPassword } from '../controllers/userController.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router=express.Router();

router.route('/register').post(register)

router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isAuthenticated,getMyprofile)
router.route('/changepassword').put(isAuthenticated,changepassword)
router.route('/updateprofile').put(isAuthenticated,updateProfile)
router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:token').put(resetPassword)

export default router;
