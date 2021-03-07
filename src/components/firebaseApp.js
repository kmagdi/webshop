import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCelTcBTr-ynCE0XHwD99CTMPyQ_WwEkYU",
    authDomain: "myreactwebshop.firebaseapp.com",
    projectId: "myreactwebshop",
    storageBucket: "myreactwebshop.appspot.com",
    messagingSenderId: "874262294218",
    appId: "1:874262294218:web:68ee8dceaa0ee9dd874e33"
})

const db=firebaseApp.firestore()
const auth=firebase.auth()

export {db,auth}