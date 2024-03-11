const User=require('../models/user');

module.exports.profile=function(req,res){
    return res.render('user_profile',{title:"ProfilePage"});
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
    .then((user)=>{if(!user)
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
module.exports.createsession=function(req,res){
   // return res.render('user_sign_up',{title:"SignUpPage"});
}