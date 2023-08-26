import {SchemaTypes} from "mongoose";
import mongoose from "../connection.js";
const Schema= mongoose.Schema;
const userSchema= new Schema({
    'email':{type:SchemaTypes.String,required:true,unique:true},
    'password':{type:SchemaTypes.String,required:true, minLength:10,maxLength:100},
    'name':{type:SchemaTypes.String,required:true},
    'phone':{type:SchemaTypes.String}
});
 const UserModel =mongoose.model('users',userSchema);
 export default UserModel;