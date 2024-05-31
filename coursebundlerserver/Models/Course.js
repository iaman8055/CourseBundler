import mongoose from 'mongoose'

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please Enter course title"],
        minLength:[4,"Title must be atleast 4 character"],
        maxLength:[80,"Title can't exceed 80 characters"]
    },
    description:{
        type:String,
        required:[true,'Please Enter your course description'],
        minLength:[20,"description must be atleast 20 character"]
    },
    lectures:[
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            videos:{
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true,
                },
            }, 
        }
    ],
    poster:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true,
        },
    },
    views:{
        type:Number,
        default:0,
    },
    numOfVideos:{
        type:Number,
        default:0,
    },
    createdBy:{
        type:String,
        required:[true,'Enter Course Creator Name']
    },
    category:{
        type:String,
        requried:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})
export const Course= mongoose.model("Course",schema);