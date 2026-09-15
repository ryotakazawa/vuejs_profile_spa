import firebase from "firebase";

const config = {
  apiKey: "",
  authDomain: "ryo-takazawa.firebaseapp.com",
  databaseURL: "ryo-takazawa.firebaseio.com",
  projectId: "ryo-takazawa",
  storageBucket: "ryo-takazawa.appspot.com",
  messagingSenderId: "784862380714"
};
firebase.initializeApp(config);
export const functions = firebase.functions();