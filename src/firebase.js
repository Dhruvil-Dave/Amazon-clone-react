import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEezXP2NgcP1SP0jmVcui2ylRf6pp9-eo",
    authDomain: "challenge-80a0c.firebaseapp.com",
    projectId: "challenge-80a0c",
    storageBucket: "challenge-80a0c.appspot.com",
    messagingSenderId: "379559067925",
    appId: "1:379559067925:web:7fb5de5a491614bb31691c",
    measurementId: "G-153Y2X2PBS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
