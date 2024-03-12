const { name } = require('ejs');
const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
   email: {
    type:String,
    required:true,
    unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }

},{
    timestamps:true
});
//tells this schema is for which table in mongodb
const users=mongoose.model('users',userSchema);
module.exports=users;