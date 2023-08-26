const URL="mongodb+srv://Etika8445:etika@cluster0.c9w7fek.mongodb.net/userdb?retryWrites=true&w=majority";
import mongoose from "mongoose";
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB connected');
}).catch(err=>{
    console.log('error during db connection',err);
})
export default mongoose;