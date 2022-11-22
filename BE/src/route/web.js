import express from 'express'
import homeController from '../controller/homeController.js'
import apiController from '../controller/apiController'
import userController from "../controller/userController"

let router = express.Router()

const initWebRoute = (app) =>{ 
    router.get('/', homeController.homePage)
    router.post('/api/create-apple', apiController.createApple)
    router.get('/api/get-apple', apiController.getApple)
    router.post('/api/update-apple', apiController.updateApple)
    router.post('/api/delete-apple', apiController.deleteApple)
    //router.post('/api/create-outstanding-phone',  apiController.createOutstandingPhone)
    router.get('/api/get-outstanding-phone', apiController.getOutStandingPhone);
    //router.post('/api/update-outstanding-phone', apiController.updateOutStandingPhone);
    //router.post('/api/delete-outstanding-phone', apiController.deleteOutStandingPhone);   


    router.post('/api/login',userController.handleLogin);
    return app.use("/",router)

}

module.exports = initWebRoute