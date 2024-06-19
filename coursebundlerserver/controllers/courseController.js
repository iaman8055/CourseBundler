
import {Course }from '../Models/Course.js'
import { catchAsyncError } from '../middlewares/catchAsyncError.js';
import getDataUri from '../utils/dataUri.js';
import ErrorHandler from '../utils/errorHandler.js';
import cloudinary from 'cloudinary';
export const getAllCourses= catchAsyncError(
async (req,res,next)=>{

    const courses=await Course.find();
    res.status(200).json({
        success:true,
        courses,
    });
})
export const createcourse= catchAsyncError(
    async (req,res,next)=>{
        const{title, description,category,createdBy}=req.body;
        if(!title||!description||!category||!createdBy)
        return next(new ErrorHandler("Please add all fields",400))
        const file=req.file;
        // console.log(file);
        const fileUri=getDataUri(file)
        const mycloud=await cloudinary.v2.uploader.upload(fileUri.content)
        await Course.create({
            title,
            description,
            category,
            createdBy,
            poster:{
                public_id:mycloud.public_id,
                url:mycloud.secure_url
            }
        });
        res.status(201).json({
            success:true,
            message:"Course Created Successfully.You can add lectures now"
        })
    })

    export const getcourselectures=catchAsyncError(
        async(req,res,next)=>{
            const course=Course.findById(req.params.id);
            if(!course) return next(new ErrorHandler("No Such Course Found",404));

            course.views+=1;
            await course.save();
            res.status(201).json({
                success:true,
                message:course.lectures,
            })
            
        }
    )

    export const addlecture = catchAsyncError(
        async (req, res, next) => {
            const { title, description } = req.body;
            if (!title || !description) return next(new ErrorHandler("Please add all fields", 400));
            
            const file = req.file;
            if (!file) return next(new ErrorHandler("No file uploaded", 400));
            
            const fileUri = getDataUri(file);
            const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
                resource_type: "video"
            });
    
            const course = await Course.findById(req.params.id);
    
            if (!course) return next(new ErrorHandler("No course found", 404));
    
            course.lectures.push({
                title,
                description,
                videos: {
                    public_id: mycloud.public_id,
                    url: mycloud.secure_url
                }
            });
    
            course.numsOfVideos = course.lectures.length;  // Corrected typo from `course.lecture.length` to `course.lectures.length`
            await course.save();
    
            res.status(200).json({
                success: true,
                message: "Lecture added successfully"
            });
        }
    );


    export const deleteCourse=catchAsyncError(async(req,res,next)=>{
        const {id}=req.params
        const course=await Course.findById(id);
        if(!course)return next(new ErrorHandler("Course not found",404));
        await cloudinary.v2.uploader.destroy(course.poster.public_id);

        for(let i=0;i<course.lectures.length;i++){
            const singleLecture= course.lectures[i];
            await cloudinary.v2.uploader.destroy(singleLecture.videos.public_id,{
                resource_type:"video"
            });

        }
        await course.deleteOne({_id:id});

        res.status(200).json({
            success:true,
            message:"Course Deleted Successfully"
        })
    })

    export const deleteLecture=catchAsyncError(async(req,res,next)=>{
        const{courseId,lectureId}=req.query
        const course=await Course.findById(courseId);
        if(!course) return next(new ErrorHandler("Course Not Found",404));
        const lecture=course.lectures.find(item=>{
            if(item._id.toString()!==lectureId.toString())return item;
        })

        await cloudinary.v2.uploader.destroy(lecture.videos.public_id,{
            resource_type:"video"
        });
        course.lectures=course.lectures.filter(item=>{
            if(item._id.toString()!==lectureId.toString())return item;
        })
        course.numsOfVideos = course.lectures.length;  // Corrected typo from `course.lecture.length` to `course.lectures.length`

        await course.save();
        res.status(200).json({
            success:true,
            message:"Lecture Deleted successfully"
        })
    })