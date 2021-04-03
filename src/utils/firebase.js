import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWEKt11jftZtPo972Uh0gSkwgihCjOtaw",
  authDomain: "practiceone-b7438.firebaseapp.com",
  projectId: "practiceone-b7438",
  storageBucket: "practiceone-b7438.appspot.com",
  messagingSenderId: "1067285750927",
  appId: "1:1067285750927:web:50b3d2b7330dd215f47cfa",
  measurementId: "G-M2CPZH1SSY",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.collection("quotes").get();

export default firebase;
