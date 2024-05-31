import { Course } from "../Models/Course.js";
import { User } from "../Models/User.js"
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { sendemail } from "../utils/sendemail.js";
import crypto from 'crypto'
export const register=catchAsyncError(async(req,res,next)=>{
    const{name,email,password}=req.body;

    if(!name||!email||!password) return next(new ErrorHandler("Please enter all fields",400))

    let user=await User.findOne({email}) 
    if(user) return next(new ErrorHandler("User already exists",409))
    user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"temp",
            url:'temp-url'
        }
    });
    sendToken(res,user,"User registed successfully",201)
})
export const login=catchAsyncError(async(req,res,next)=>{
    const{email,password}=req.body;

    if(!email||!password) return next(new ErrorHandler("Please enter all fields",400))

    const user=await User.findOne({email}) .select("+password")
    if(!user) return next(new ErrorHandler("Incorrect Email or password",401))
    const isMatch=await user.comparePassword(password);
    if(!isMatch)return next(new ErrorHandler("Incorrect Email or password",401))
    
    sendToken(res,user,`Welcome back ${user.name}`,200)
})

export const logout= catchAsyncError(async(req,res,next)=>{
    res.status(201).cookie('token',null,{
        expires:new Date(Date.now()),

    }).json({
        success:true,
        message:"logged out successfully"
    })
})

export const getMyprofile=catchAsyncError(async(req,res,next)=>{
    const user= await User.findById(req.user._id)

    res.status(200).json({
        succes:true,
        user 
        
    })
})
export const changepassword=catchAsyncError(async(req,res,next)=>{
    const{oldPassword,newPassword}=req.body;
    if(!oldPassword||!newPassword)return next(new ErrorHandler("Please Enter All fileds",400))
    const user= await User.findById(req.user._id).select("+password")
    const isMatch=await user.comparePassword(oldPassword);
    if(!isMatch) return next(new ErrorHandler("Incorrect Old Password",401));
    user.password=newPassword;
    await user.save();
    res.status(200).json({
        succes:true,
        message:"Password updated successfully"
        
    })
})
export const updateProfile=catchAsyncError(async(req,res,next)=>{
    const{name,email}=req.body;
    const user= await User.findById(req.user._id)

    if(name) user.name=name;
    if(email)user.email=email;
    
    await user.save();
    res.status(200).json({
        succes:true,
        message:"Profile Updated successfully" 
    })
})
export const updateProfilePicture=catchAsyncError(async(req,res,next)=>{
    //cloudinary todo

    res.status(200).json({
        succes:true,
        message:"Profile Updated successfully" 
    })
})
export const forgotPassword=catchAsyncError(async(req,res,next)=>{
    //cloudinary todo
    const{email}=req.body;
    const user= await User.findOne({email});
    if(!user)return next(new ErrorHandler("User with this email is nogt found",404));
    const resetToken= await user.getResetToken();
    await user.save();

    const url=`${process.env.FRONTEND_URL}/resetpassword/${resetToken}`
    const message=`Click on the link to rest the password ${url}. If you have not requested then please ignore`
    await sendemail(user.email,'Cousrebundler reset password',message)
    res.status(200).json({
        succes:true,
        message:`Reset token send to ${user.email}` 
    })
    
})

export const resetPassword=catchAsyncError(async(req,res,next)=>{
    //cloudinary todo
    const {token}=req.params;
    const resetPasswordToken= 
    crypto.createHash('sha-256')
    .update(token)
    .digest('hex')
    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{
            $gt:Date.now(),
        }
    })
    if(!user)return next(new ErrorHandler("Token is invalid or Expired"),404)
    user.password=req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;
    await user.save()
    res.status(200).json({
        succes:true,
        message:"Password changed successfully" 
    })
})
export const addToPlaylist=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.user._id);

    const course=await Course.findById(req.body.id);
    if(!course)return next(new ErrorHandler("Invalid Course Id"),404);
    const itemExist=user.playlist.find((item)=>{
        if(item.course.toString()===course._id.toString())return true;
    })
    if(itemExist)return next(new ErrorHandler("Item already exist"),409)
    user.playlist.push({
        course:course._id,
        poster:course.poster.url
    })
    await user.save();
    res.status(200).json({
        succes:true,
        message:"Course added to playlist" 
    })
})
export const removeFromPlaylist=catchAsyncError(async(req,res,next)=>{
    const user=await User.findById(req.user._id);

    const course=await Course.findById(req.body.id);
   const newPlaylist=user.playlist.filter((item)=>{
    if(item.course.toString()!==course._id.toString())
    return item;
   })
   user.playlist=newPlaylist;
    await user.save();
    res.status(200).json({
        succes:true,
        message:"Removed From Playlist"
    })
})

