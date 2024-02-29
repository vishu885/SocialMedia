const express= require('express');
const app=express();
const port=8000;

//use express router
app.use('/' ,require('./routes/index.js'));
app.set('view engine','ejs');
app.set('view','./views');


app.listen(port,function(err){
    if(err){
        console.error(`Error in running server ${err}`);
    }
    console.log(`server is running on Port ${port}`);
})