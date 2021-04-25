const { admin, db } = require("./utils/admin")
const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const firebaseConfig = require("./utils/config")
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);// Initializing Firebase
const { signIn,signUp,resetPassword, getNewToken, verifyToken} = require("./handlers/auth");

app.use(express.json());
app.use(cors());

app.post("/register",signUp);
app.post("/login",signIn);

app.get("/verifytoken", verifyToken);

app.get("/newtoken", getNewToken);

app.listen('3000', (res, err) => {
    if(err) 
        console.log("error starting app");
    else
        console.log('App is running on port 3000');
});
// exports.api=functions.https.onRequest(app);//this will add api prefix to our url and gives api url like https://us-central1-parkit-27a48.cloudfunctions.net/api/