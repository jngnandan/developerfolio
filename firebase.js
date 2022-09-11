// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import 'firebase/analytics'

import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb9Zl6U9Xnn6dnvLU4IdviYjHgnZuK20Y",
  authDomain: "developerfolio-gn.firebaseapp.com",
  projectId: "developerfolio-gn",
  storageBucket: "developerfolio-gn.appspot.com",
  messagingSenderId: "479570403212",
  appId: "1:479570403212:web:f0ed8ceb9e86596b5d80a9",
  measurementId: "G-EJTT79EMEG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



export const analytics = () => {
  if (typeof window !== "undefined") {
    return firebase.analytics(app)
  } else {
    return null
  }
}


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db,};