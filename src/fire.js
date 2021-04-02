import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB_Aby0J5BsRGPg23mn-E_WS0HwM3rIXE8",
  authDomain: "react-login-72a72.firebaseapp.com",
  projectId: "react-login-72a72",
  storageBucket: "react-login-72a72.appspot.com",
  messagingSenderId: "275119980665",
  appId: "1:275119980665:web:30ee0530e0a504984194a8",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
