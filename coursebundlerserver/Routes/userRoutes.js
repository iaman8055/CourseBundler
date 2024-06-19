import express from 'express'
import { login, register,logout, getMyprofile, changepassword, updateProfile, forgotPassword, resetPassword, deleteUser, getAllUsers, deleteMyProfile, updateUserRole } from '../controllers/userController.js';
import { AuthorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';
const router=express.Router();

router.route('/register').post(singleUpload,register)

router.route('/login').post(login)
/
router.route('/logout').get(logout)
//Get My Profile
router.route('/me').get(isAuthenticated,getMyprofile)
//delete My Profile
.delete(isAuthenticated,deleteMyProfile);
//change password
router.route('/changepassword').put(isAuthenticated,changepassword)
//Update Profile
router.route('/updateprofile').put(isAuthenticated,updateProfile)

router.route('/forgotpassword').post(forgotPassword)
router.route('/resetpassword/:token').put(resetPassword)
router.route('/admin/users').get(isAuthenticated,AuthorizeAdmin,getAllUsers)

export default router;
