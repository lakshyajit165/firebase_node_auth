const admin = require("firebase-admin");
admin.initializeApp({ 
    // "projectId": "project-assist-3cbb3",
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://project-assist-3cbb3.firebaseio.com'
});
const db = admin.firestore();
const firebase = require("firebase");
module.exports = { admin, db,firebase};