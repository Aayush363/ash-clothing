import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCxpJZHlBTB1MB5nQpSo7GSi4LjLE1DagU",
    authDomain: "ash-db-9ca1a.firebaseapp.com",
    projectId: "ash-db-9ca1a",
    storageBucket: "ash-db-9ca1a.appspot.com",
    messagingSenderId: "489293473654",
    appId: "1:489293473654:web:3f498ce5c371457c74bc57",
    measurementId: "G-8Y7G1HX926"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;