import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyCs4B8AKJ4m5tX5ndKcDXAvYvkHG4r44nU",
    authDomain: "crwn-db-aab18.firebaseapp.com",
    databaseURL: "https://crwn-db-aab18.firebaseio.com",
    projectId: "crwn-db-aab18",
    storageBucket: "crwn-db-aab18.appspot.com",
    messagingSenderId: "234482964776",
    appId: "1:234482964776:web:9cd648567d6090c4d1181d",
    measurementId: "G-WDTWJP5WSS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;