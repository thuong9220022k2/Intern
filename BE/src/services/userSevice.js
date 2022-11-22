import db from "../config/config"


const handleUserLogin = (email,password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let userData = {}
            let snapshot = await db.collection('User').get()
            snapshot.forEach((doc)=>{
                if(doc.data().email !== email){
                    userData.errCode = 2,
                    userData.messenger = 'email is invalid'
                }
                else{
                    if(doc.data().password !== password){
                        userData.errCode = 3,
                        userData.messenger = 'password is invalid'
                    }
                    else{
                        userData.errCode = 0,
                        userData.messenger = 'login success'
                    }
                }

            })
            resolve(userData)  
                
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    handleUserLogin : handleUserLogin
}