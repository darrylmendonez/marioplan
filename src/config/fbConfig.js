import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCtRxJW_XrgcFGi8hIq3sVhxboVFscNcDI",
  authDomain: "marioplan-12-2018.firebaseapp.com",
  databaseURL: "https://marioplan-12-2018.firebaseio.com",
  projectId: "marioplan-12-2018",
  storageBucket: "marioplan-12-2018.appspot.com",
  messagingSenderId: "107539797239"
};


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;