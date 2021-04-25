const { admin, db, firebase } = require("../utils/admin");
const { validateSignUPData, validateLoginData } = require("../utils/helper")
//
exports.signUp = (req, res) => {
 const newUser = {
 email: req.body.email,
 password: req.body.password,
 confirmPassword: req.body.confirmPassword,
};

firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
.then(result => {
    console.log(result);
    return res.status(201).send({ "message": "user created" });
})
.catch(err => {
    console.log(err);
    return res.status(500).send({ "message": "internal server error"});
})

}

exports.signIn = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }
    const { valid, errors } = validateLoginData(user);
    if (!valid) return res.status(400).json(errors)
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)//firebase signin method
    .then(data => {
    console.log(JSON.stringify(data))
    return data.user.getIdToken();
    }).then(token => {
    return res.json({ token })
    }).catch(err => {
    if (err.code == "auth/wrong-password" || err.code == "auth/user-not-found") {
    return res.status(403).json({ message: "Wrong credentials, Please try again" });
    }
    return res.status(500).json({ error: err.code })
    })
}

exports.getNewToken = (req, res) => {
    // firebase.auth().currentUser.getIdToken(true)
    // .then(function(idToken) {
    //     console.log(idToken);
    //     return res.status(200).send({ 'msg' :'Logged result'});
    // }).catch(function(error) {
    //     return res.status(500).send({ 'msg': 'Error' });
    // });
    // firebase.auth()
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    admin.auth().getUser('jKcAzPVXMxfTEQYYXVyHezEz2Dw1')
    .then(res => {
        console.log(res);
        return res.status(200).send({ 'msg' :'Logged result'});
    })
    .catch(function(error) {
        console.log(error);
            return res.status(500).send({ 'msg': 'Error' });
    });
    
}

// exports.userLogout = (req, res) => {
//     firebase.auth.signOut()
// }
exports.verifyToken = (req, res) => {
    let idToken = req.headers["authorization"];
    admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
        console.log(decodedToken);
        const uid = decodedToken.uid;
        return res.status(200).send("Logged result");
        // ...
    })
    .catch((error) => {
        // Handle error
        console.log(error);
        return res.status(500).send("Error");
    });
}