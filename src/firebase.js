
import firebase from 'firebase'
// import 'firebase/[SERVICE_NAME]'
// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD36sX9JcO95ZALNn2nUp2Z4_ISpaPvBVo",
    authDomain: "clone-72059.firebaseapp.com",
    projectId: "clone-72059",
    storageBucket: "clone-72059.appspot.com",
    messagingSenderId: "236522847326",
    appId: "1:236522847326:web:2b2def461268d9438708cf",
    measurementId: "G-0H9JQFW4RZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  // const auth = 4
  // const db=2

  export {db, auth}