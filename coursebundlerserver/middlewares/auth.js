import { User } from "../Models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated=catchAsyncError(async(req,res,next)=>{
    const{token}=req.cookies;
    if(!token) return next(new ErrorHandler("Please Logged in",401));

    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded._id)
    next();
})