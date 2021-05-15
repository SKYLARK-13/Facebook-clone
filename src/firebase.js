import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmX3iNx0ADQNgh59TW6s_9nyk2eGS78nU",
  authDomain: "facebook-clone-c99ad.firebaseapp.com",
  projectId: "facebook-clone-c99ad",
  storageBucket: "facebook-clone-c99ad.appspot.com",
  messagingSenderId: "72351870158",
  appId: "1:72351870158:web:50b76e4f40e6266b59b49f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
