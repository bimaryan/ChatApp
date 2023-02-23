import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvnwevaPwN4EpnpPl9dAt4UiaAisWDCIg",
    authDomain: "chatting-6da5c.firebaseapp.com",
    projectId: "chatting-6da5c",
    storageBucket: "chatting-6da5c.appspot.com",
    messagingSenderId: "567466617457",
    appId: "1:567466617457:web:df6e23973f906069a149d0",
    measurementId: "G-Z1FF59WC9T"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }