import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendemail } from "../utils/sendemail.js";
import { Stats } from "../Models/Stats.js";
export const contact=catchAsyncError(async(req,res,next)=>{
    const{name,email,message}=req.body;
    if(!name||!email||!message) return next(new ErrorHandler("All fields are required"));

    const to=process.env.MY_MAIL;
    const subject="Contact from Coursebundler";
    const text=`I am ${name} and my email is ${email}. \n${message}`
    await sendemail(to,subject,text);
    res.status(200).json({
        success:true,
        message:'Your message has been sent'
    })
})

export const courseRequest=catchAsyncError(async(req,res,next)=>{
    const{name,email,course}=req.body;
    if(!name||!email||!course) return next(new ErrorHandler("All fields are required"))
    const to=process.env.MY_MAIL;
    const subject="CourseRequest from coursebundler";
    const text=`I am ${name} and my email is ${email}. \n${course}`
    await sendemail(to ,subject,text);

    res.status(200).json({
        success:true,
        message:"Your courserequest has been sent"
    })
})
export const getDashboardStats=catchAsyncError(async(req,res,next)=>{
    const stats=Stats.find({}).sort({createdAt:"desc"}).limit(12);
    
    res.status(200).json({
        success:true,
    })
})
