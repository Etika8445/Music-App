const URL="your database";
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB connected');
}).catch(err=>{
    console.log('error during db connection',err);
})
export default mongoose;
