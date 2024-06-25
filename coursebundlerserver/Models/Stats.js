import mongoose from "mongoose";

const schema= new mongoose.Schema({
    user:{
        type:Number,
        default:0
    },
    subscription:{
        type:String,
        defaut:''
    },
    views:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

export const Stats=mongoose.model('Stats',schema)