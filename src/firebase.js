import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEohHAAudLme_EGCzOlT1B_5HYJ8s6FvM",
  authDomain: "react-native-lr.firebaseapp.com",
  projectId: "react-native-lr",
  storageBucket: "react-native-lr.appspot.com",
  messagingSenderId: "763206017579",
  appId: "1:763206017579:web:92acb36cf145946937806e",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
