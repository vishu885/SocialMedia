const express=require('express');
const router=express.Router();
const homeController =require('../controller/homeController.js');
console.log("router loaded");
//All request from index.js  will come here first
router.get('/',homeController.home);
//then /users request frm here will go to users route
router.use('/users',require('./users'));

module.exports=router;