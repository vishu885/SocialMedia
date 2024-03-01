const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost/socialMedia_dev");
const db=mongoose.connection;
db.on('error',console.error.bind("Error connecting to db"));
db.once('open',function(){
    console.log("Succesffull connection");
})
module.exports=db;