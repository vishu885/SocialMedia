const express=require('express');
const router=express.Router();
const userController=require('../controller/userController'); 
//all /users/profile request will go to usercontroller profile function
router.get('/profile',userController.profile);
router.get('/signin',userController.signin);
router.get('/signup',userController.signup);
router.post('/create',userController.create);

module.exports=router;