import app from './app.js'
import { connectDB } from './Config/database.js';
import cloudinary from 'cloudinary';
import Razorpay from 'razorpay'
import nodecron from 'node-cron'

connectDB()

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLIENT_NAME,
    api_key:process.env.CLOUDINARY_CLIENT_API,
    api_secret:process.env.CLOUDINARY_CLIENT_SECRET
});

export const instance=new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY ,
  });
  nodecron.schedule("0 0 0 1 * *",async()=>{
    try {
        await stats.create();
    } catch (error) {
        console.log(error)
    }
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on :${process.env.PORT}`)
});

