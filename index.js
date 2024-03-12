const express= require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
//import mongoose_its like an orm tool to use mongodB
const db=require('./config/mongoose.js')
const cookieparser=require('cookie-parser');
//to use static file like css,js
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieparser());
//to make use of layouts
app.use(expressLayouts);
//to extract style and script from sub pages to head in layout
app.set("layout extractStyles",true);
app.set('layout extractScripts',true);
//use express router to route request 
app.use('/' ,require('./routes/index.js'));
//import template engine ejs to render html pages in javascript
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.error(`Error in running server ${err}`);
    }
    console.log(`server is running on Port ${port}`);
})