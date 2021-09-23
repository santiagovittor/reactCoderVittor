import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNBTRxGep1OPf17QoQVP_JVsCqA45Tdvw",
    authDomain: "thefootballstore-coderhouse.firebaseapp.com",
    projectId: "thefootballstore-coderhouse",
    storageBucket: "thefootballstore-coderhouse.appspot.com",
    messagingSenderId: "104559314762",
    appId: "1:104559314762:web:1cefc7066d1112db72e3b3"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app)