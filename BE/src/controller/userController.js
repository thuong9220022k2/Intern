import db from '../config/config'

import userSevice from "./../services/userSevice"
const handleLogin = async(req,res)=>{
    let email = req.body.email
    let password = req.body.password

    if(!email || ! password){
        return res.status(500).json({
            errCode:1,
            message: "Missing input parameter"
        })
    }

     let userData = await userSevice.handleUserLogin(email,password);
     if(userData.errCode === 0){
        return res.status(200).json({
            errCode : 0,
            message : " login success"
        })
     }
     else if(userData.errCode === 2){
        return res.status(400).json({
            errCode : 2,
            message : " email is invalid"
        })
     }
     else{
        return res.status(400).json({
            errCode : 3,
            message : "password is invalid"
        })
     }
     
}

module.exports = {
    handleLogin : handleLogin
}