import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrYZBZclfHQip-E0h41Mkr6yfjQ7PAjZM",
    authDomain: "blog-f7fb7.firebaseapp.com",
    projectId: "blog-f7fb7",
    storageBucket: "blog-f7fb7.appspot.com",
    messagingSenderId: "281538194607",
    appId: "1:281538194607:web:248d72be28610350ff785a",
    measurementId: "G-Z0PVSQX84N"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

  