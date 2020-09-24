import firebase from 'firebase/app';
import 'firebase/auth';
 
  const firebaseConfig = {
    apiKey: "AIzaSyAZ6E9FczgwjRKRO7kDmE9kThHpxJaYppU",
    authDomain: "redux-poke.firebaseapp.com",
    databaseURL: "https://redux-poke.firebaseio.com",
    projectId: "redux-poke",
    storageBucket: "redux-poke.appspot.com",
    messagingSenderId: "155407693868",
    appId: "1:155407693868:web:97b73dc772826c25a4f989",
    measurementId: "G-9SXYMC4B3X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
export const signGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}
export const outLogGoogle = () => firebase.auth().signOut()
    