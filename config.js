import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDu_qiS_tjTxxoS-MBL9kk9cG_vzniP5Dg",
  authDomain: "book-santa-7c6ca.firebaseapp.com",
  projectId: "book-santa-7c6ca",
  storageBucket: "book-santa-7c6ca.appspot.com",
  messagingSenderId: "768179492814",
  appId: "1:768179492814:web:ea8dc797851e1dd5397d9f"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
