const express=require('express');
const router=express.Router();
const userController=require('../controller/userController'); 
//all /users/profile request will go to usercontroller profile function
router.get('/profile',userController.profile)
module.exports=router;