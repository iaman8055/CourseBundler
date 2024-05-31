import app from './app.js'
import { connectDB } from './Config/database.js';
connectDB()
app.listen(process.env.PORT,()=>{
    console.log(`server is running on :${process.env.PORT}`)
});
