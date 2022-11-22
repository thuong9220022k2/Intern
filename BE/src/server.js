import express from 'express'
import bodyParser from 'body-parser'
import configViewEngine from './config/viewEngine'
import initWebRoute from './route/web'
import cors from 'cors'
var app = express()

app.use(bodyParser.urlencoded({extended :true}));
app.use(bodyParser.json());
app.use(cors())

configViewEngine(app)

initWebRoute(app)


let port = process.env.PORT || 3030
app.listen(port ,()=>{
    console.log('I am coming up on the port' + port);
})