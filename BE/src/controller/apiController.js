import { getApp } from 'firebase-admin/app';
import db from '../config/config'
let createApple = async (req,res)=>{
    const data = req.body
    await db.collection('Apple').add(data)
    return res.status(200).json({
        msg : 'Create Suceess'
    })   
    
}

let getApple = async(req,res)=>{
    const snapshot = await db.collection('Apple').get();
    const list = snapshot.docs.map( (doc) => ({ id:doc.id ,...doc.data()}))
    console.log(list);
    return res.status(200).json(list)
}

let updateApple = async(req,res)=>{
    const id = req.body.id;
    delete req.body.id 
    const data = await db.collection('Apple').doc(id).update(req.body);
    return res.status(200).json({
        msg : 'Update success'        
    })
}

let deleteApple = async(req,res)=>{
    const id = req.body.id
    const data = await db.collection('Apple').doc(id).delete();
    return res.status(200).json({
        msg : 'Deleted'
    })
}

let createOutStandingPhone = async(req,res)=>{
    let data = req.body;
    await db.collection('OutstandingPhone').add(data);
    return res.status(200).json({
        msg : ' Created'
    })
}

let getOutStandingPhone = async(req,res)=>{
    const snapshot = await db.collection('OutStandingPhone').get();
    const list = snapshot.docs.map( (doc) => ({ id:doc.id ,...doc.data()}))
    console.log(list);
    return res.status(200).json(list)
}

let updateOutStandingPhone = async(req,res)=>{
    const id = req.body.id;
    delete req.body.id 
    const data = await db.collection('OutStandingPhone').doc(id).update(req.body);
    return res.status(200).json({
        msg : 'Update success'        
    })
}

let deleteOutStandingPhone = async(req,res)=>{
    const id = req.body.id
    const data = await db.collection('OutStandingPhone').doc(id).delete();
    return res.status(200).json({
        msg : 'Deleted'
    })
}


module.exports = {
    createApple : createApple,
    getApple: getApple,
    updateApple : updateApple,
    deleteApple : deleteApple,
    createOutStandingPhone : createOutStandingPhone,
    getOutStandingPhone : getOutStandingPhone,
    updateOutStandingPhone : updateOutStandingPhone,
    deleteOutStandingPhone : deleteOutStandingPhone
}