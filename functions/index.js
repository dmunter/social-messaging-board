const functions = require("firebase-functions");

const admin = require('firebase-admin');
const { user } = require("firebase-functions/v1/auth");
admin.initializeApp(functions.config().firebase)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const createNotification = (notification =>{
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc=> console.log('notification added', doc))
})

exports.projectCreated = functions.firestore
.document('/projects/{projectId}')
.onCreate(doc=>{
  const project = doc.data();
  const notification = {
    content: 'created a new post',
    user: `${project.authorFirstName} ${project.authorLastName}`,
    time: admin.firestore.FieldValue.serverTimestamp()
    
  }
  return createNotification(notification)
})



exports.newUserJoined = functions.auth.user()
.onCreate(user =>{
  return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc =>{
      const newUser = doc.data
      const notification ={
        content: 'has joined the party',
        user: `${newUser.firstName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      }
      return createNotification(notification)
    })
})