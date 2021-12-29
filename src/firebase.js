import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBTJ2pf8e5ADTZCOCrs6q1teWkOPeo9O4",
    authDomain: "reactsocial-db5cb.firebaseapp.com",
    projectId: "reactsocial-db5cb",
    storageBucket: "reactsocial-db5cb.appspot.com",
    messagingSenderId: "305219774871",
    appId: "1:305219774871:web:8d8aab5862fc945c793cd2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const storage= firebase.storage();

  const provider= new firebase.auth.GoogleAuthProvider();

  export{db,auth,provider,storage};