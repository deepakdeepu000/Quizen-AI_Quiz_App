// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqV1afeaagb27ninLeTlyLWC8OIlQal0",
  authDomain: "reactapp-463ae.firebaseapp.com",
  projectId: "reactapp-463ae",
  storageBucket: "reactapp-463ae.appspot.com",
  messagingSenderId: "735516578839",
  appId: "1:735516578839:web:6916282e0078911d473852",
  measurementId: "G-KH1NYH0HLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };

