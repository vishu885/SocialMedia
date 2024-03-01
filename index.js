const express= require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose.js')
//to use static file like css,js
app.use(express.static('./assets'));

//to make use of layouts
app.use(expressLayouts);
//to extract style and script from sub pages to head in layout
app.set("layout extractStyles",true);
app.set('layout extractScripts',true);
//use express router
app.use('/' ,require('./routes/index.js'));
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.error(`Error in running server ${err}`);
    }
    console.log(`server is running on Port ${port}`);
})