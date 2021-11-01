import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCXfZonvdWgmEIysbFKrm0NWtsPCqppk3Q",
    authDomain: "saturday-gen19.firebaseapp.com",
    projectId: "saturday-gen19",
    storageBucket: "saturday-gen19.appspot.com",
    messagingSenderId: "644527566121",
    appId: "1:644527566121:web:5ed93a78ddd71f0cebdb38",
    measurementId: "G-D1R0PJ0G4N"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
