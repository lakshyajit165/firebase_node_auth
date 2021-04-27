const admin = require("firebase-admin");
admin.initializeApp({ 
    // "projectId": "project-assist-3cbb3",
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "project-assist-3cbb3",
            "private_key_id": "ecdb1841589b9eabcd5f51bc1a2d575f17dc979a",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQClq5YgnWl121/A\nfG+A47R/1EL/uFywyX3DYwHDmBizPlYIneRZyYz9VwPub+EAFTv3OWYIx8Gq2Nfi\nGt9/g1OdNmE1EDMud/CiwsWVVZJWLNLFtYbsP6be5/aO7+4hJEgiNuBmx0LBKQDR\nIPElVTeQDFYLF7v3qj01RPeT36Q+Ff77e8XPQ0S69OfE28SzsPOgAqmdJ1hGoguX\n3/z01IodgioXSTQIfvdg9Poe9Ugm4yPoCsHHUMQ2wXuEWH9AhPIfdalC5G0N5ncd\nqQsIk1GUvDzmsXcp2oSW+EvS6ua+5wq0EC2dLFm8KkFA7/RUn4L8ndz7OcGQ5HmZ\nN6urW/tbAgMBAAECggEARt48Ba6gdtCFSL9SKWX+h/ICSQaR6/P9Ts/y6LsO0doY\nDm6QSJJNs+99mIkWTCVJNgvBKH9eypkg3DFXquHAKk+hTIQmCLo43z8HK0bkJuXc\nscNhuHzQAqlikKl1CYtOKgikfIK/fQZvuYXocepersmAIxWfjCWwMjHS4Fg6F247\ncu6NE5qpWi6aM2E4mMs3cKJJq8u5MQeDWHINPV0AWOg75lrAg6xIQWu/OafL1yA0\ny8cqE1CVjX8CZOfT4kg3yaa9WTV2XMRLN0yTF0VoYwjl1JDxPA6TY0UMMuR6AlhF\nrCSxCWJ3HVAg0u88vNmKs6vk9lTVtNjmYSrnp/oLqQKBgQDhQTCCovAQ7uCJGJob\nNeWfEleeL0mvqmgmYTVKkQsZom7EbPgWYk9luSEfxkht4MKbkkK3RiZie+jbdTTh\nilcNID06f/32PLxsms3VyBcfszJ3kHqMDMRMorZCYJS7N5vj8UFKPLNWIS0tgBeb\n0sK3LPKqvaoDOcLCRktXVkjZwwKBgQC8SGi/jtImeuw/IenTS7WH8DSJVJYB8m+O\n8pief1NaIvWoQbjY9RSGwCZJgskQlI7aKd4taQnUK8WJX1g092/3MotcgM6yz0JE\nch61uKcLIIL96qHxUYyydL6rfyRfKQQr2RmCkUNK+I//tqKp/OBZDWgZvi1tgEvH\nXhapHHmmiQKBgQDW2OPZJmpN7FoTyXhrjbvHPqp9gWMJ/0I5oSxARBnPSIPYLItw\nZjKOtsZmVSyOSPu1gQrLXkiMVN1kPOXEXbvsFBzyaFQmAgZCnGDJkIClxrjTG+YX\nILI22ld29kHGVCMHhfwdP8pZ02kQ5gUepib8qg2HV0IKs5QU0xFXa0AvGwKBgQC7\nqBO2sLtlnOhv9/YcIX45kcBbC9JC+IYV3FceydqioOtlGrQIkSQ3NbYzWEXb36UN\nbeNCMUmZjVLhmwTILcILh/X8aWkaMJZkr7VJ+1OKNIo6Vyu24Eex6cfMF/mBWtkM\nduIFD5EZXOnwvPAdKqvUNheGaNTQKandeDpvrLDWuQKBgQDGja22umaOae57HWcA\nIx6Ul7pUWDrmVtS5yk0TBZyIMT8/4edOUNsoj8VxnKSy5XGaHlSf6hIBV/M4c7bn\nbakbxGr6VD10/abnCcgVsEf6wIOdcdYmgyoDeUq+as7myPue+CY7M0Zn5sfSuh/v\neiJnrqK6s/n+mRCiIBvb7IgpNA==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-jyjo2@project-assist-3cbb3.iam.gserviceaccount.com",
            "client_id": "103878487094961442592",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jyjo2%40project-assist-3cbb3.iam.gserviceaccount.com"
          }
    ),
    databaseURL: 'https://project-assist-3cbb3.firebaseio.com'
});
const db = admin.firestore();
const firebase = require("firebase");
module.exports = { admin, db,firebase};