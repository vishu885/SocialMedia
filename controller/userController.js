const { response } = require('express');
const User=require('../models/user');

module.exports.profile=function(req,res){
    console.log("COOKIES",req.cookies);
    
        User.findById(req.cookies.user_id).then((user)=>
       { console.log("USER IS ",user);
        if(user)
       { 
        return res.render('user_profile',{title:"ProfilePage", user:user});
       }
       else{return res.redirect("/users/signin")}
       }).catch((err)=>console.log("Error finding user with this id"))
    
    
}
module.exports.signin=function(req,res){
    return res.render('user_sign_in',{title:"SignInPage"});
}
module.exports.signup=function(req,res){
    return res.render('user_sign_up',{title:"SignUpPage"});
}
//to create user from signup page
module.exports.create=function(req,res){
    if(req.body.password != req.body.confirm_pwd){
        console.log("Password not match");
       return  res.redirect('back');
    }
    console.log("After pwd match")
    User.findOne({email:req.body.email})
    .then((user)=>{console.log('USER DETAILS',user); if(!user)
        {
            User.create(req.body);
            return res.redirect('/users/signin');
        }
        else  res.redirect('back');
    }).catch((err)=>{console.error(err);return});
    // User.findOne({email:req.body.email},function(err,user)
    // {
    //     if(err){console.errror("Error in finding user while signing up!!");return}

    //     if(!user){User.create(req.body,function(err,user){
    //         if(err){console.error('Error in creating user while signing up');return}

    //        return res.redirect('/users/signin');
    //     })}
    //     else {
    //         res.redirect('back');
    //     }
    // })
}
//to move to profile page after signin
module.exports.createsession=function(req,res){
    //steps to authenticate
   // find user with e-mail
    User.findOne({email:req.body.name}).then((user)=>{
        console.log('USER:',user);
        if(user)
        {
            if( user.password!=req.body.password)
             {
                console.log("PWD NOT MATCH");
                return response.redirect('back');
                 
             }
             else{
                res.cookie('user_id',user._id);
                return res.redirect('/users/profile');
             }
         }
        else {
            console.log("User dont exist ");
            return response.redirect('back')
            }

}).catch((err)=>{console.log(err); return})
   //handle user found:match password

   //handle pwd not match

   //handle session creation

   //handle user not found


}