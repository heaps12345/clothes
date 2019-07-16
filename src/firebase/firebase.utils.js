import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXsWqODVt-DXeQbL2ru_v53CAwsSAhlK0',
  authDomain: 'clothing-dev.firebaseapp.com',
  databaseURL: 'https://clothing-dev.firebaseio.com',
  projectId: 'clothing-dev',
  storageBucket: '',
  messagingSenderId: '248867026969',
  appId: '1:248867026969:web:dfeab55d3f77d8ed'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserFirestoreDocument = async userAuth => {
  if (!userAuth) return;
  debugger;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
