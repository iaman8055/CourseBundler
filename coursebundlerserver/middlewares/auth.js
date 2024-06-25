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

export const AuthorizeAdmin=(req,res,next)=>{
    if(req.user.role!=='admin')
        return next(
    new ErrorHandler(`${req.user.role} is not allowed to access this resource`,403))
    next();
}
    
export const autorizeSubscribers=(req,res,next)=>{
    if(req.user.subscription.status!=='active'&&req.user.role!=='admin')
        return next(
    new ErrorHandler(`Only Subscribers can access this resource`,403));
    next();
}