import firebase from "firebase"
import "firebase/storage"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCabmLrl7J1KL9rSfWGXUr0iOcOnowecEU",
    authDomain: "team-wp.firebaseapp.com",
    projectId: "team-wp",
    storageBucket: "team-wp.appspot.com",
    messagingSenderId: "294464504512",
    appId: "1:294464504512:web:c572a89dea006bc0e42325",
    measurementId: "G-TC25NC1YW1"
})
var db = firebaseApp.firestore()
const storage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, storage, timestamp}