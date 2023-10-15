import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD9fmighwktK8e7tQ6KMM2E_mj8O1CL1p4",
    authDomain: "peekplay-229b7.firebaseapp.com",
    projectId: "peekplay-229b7",
    storageBucket: "peekplay-229b7.appspot.com",
    messagingSenderId: "437648992551",
    appId: "1:437648992551:web:2220834cb5e6de4424a102",
    measurementId: "G-M131CFS85K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage };
  export default db;