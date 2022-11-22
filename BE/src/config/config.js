const firebase = require("firebase");
require("firebase/firestore");
const admin = require("firebase-admin");
const firebaseConfig = {
  apiKey: "AIzaSyB-Xi7AG2yfUOuMMnCT_960MwnBSGzVv28",
  authDomain: "myproject-9acce.firebaseapp.com",
  projectId: "myproject-9acce",
  databaseURL : "https://myproject-9acce-default-rtdb.firebaseio.com" , 
  storageBucket: "myproject-9acce.appspot.com",
  messagingSenderId: "359285006571",
  appId: "1:359285006571:web:2e8b805d9bc6c8730e1eae",
  measurementId: "G-J15LB04647"
};


var serviceAccount = require('../config/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject-9acce-default-rtdb.firebaseio.com"
});


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

module.exports = db;