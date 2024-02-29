const express= require('express');
const app=express();
const port=8000;


app.listen(port,function(err){
    if(err){
        console.error(`Error in running server ${err}`);
    }
    console.log(`server is running on Port ${port}`);
})