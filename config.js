import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBI_6KhkBRmacZ1wuIDJYA-H53CXyau-P0",
  authDomain: "willy-app-f2f57.firebaseapp.com",
  databaseURL: "https://willy-app-f2f57.firebaseio.com",
  projectId: "willy-app-f2f57",
  storageBucket: "willy-app-f2f57.appspot.com",
  messagingSenderId: "957572252876",
  appId: "1:957572252876:web:c77c38bb82a60591efee69",
  measurementId: "G-4Y08PYMXK1"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase.firestore();

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default  firebase.firestore();

// import * as firebase from 'firebase'
// require('@firebase/firestore')

// var firebaseConfig = {
//     apiKey: "AIzaSyCSvK-SsEwvO7rHrf0WLiqsO0o5S7pI9-8",
//     authDomain: "wily-app-86cec.firebaseapp.com",
//     databaseURL: "https://wily-app-86cec.firebaseio.com",
//     projectId: "wily-app-86cec",
//     storageBucket: "wily-app-86cec.appspot.com",
//     messagingSenderId: "436866087439",
//     appId: "1:436866087439:web:1a3bcf134182eb6559017a"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   export default firebase.firestore();