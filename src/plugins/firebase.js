import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAjJb3_dkd_jj3idLheD5z8ImrCg3-WEqM",
  authDomain: "ryo-takazawa.firebaseapp.com",
  databaseURL: "ryo-takazawa.firebaseio.com",
  projectId: "ryo-takazawa",
  storageBucket: "ryo-takazawa.appspot.com",
  messagingSenderId: "784862380714"
};
firebase.initializeApp(config);
export const functions = firebase.functions();