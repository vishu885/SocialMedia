const express=require('express');
const router=express.Router();
const homeController =require('../controller/homeController.js');
console.log("router loaded");
//All request with / will come here first
router.get('/',homeController.home);
//then /user request frm here will go to user route
router.use('/users',require('./users'));

module.exports=router;