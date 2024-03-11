const mongoose=require('mongoose');
console.log("Before");
mongoose.connect("mongodb://0.0.0.0:27017/socialMedia_dev");
const db=mongoose.connection;
db.on('error',console.error.bind("Error connecting to db"));
db.once('open',function(){
    console.log("Succesffull connection");
})
module.exports=db;