
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA0HNRNuzTd5zDOYfKk4CQk5ReA-JVM58g",
  authDomain: "react-netflix-d7036.firebaseapp.com",
  projectId: "react-netflix-d7036",
  storageBucket: "react-netflix-d7036.appspot.com",
  messagingSenderId: "881917000351",
  appId: "1:881917000351:web:0f1fc966ab3e757f3500aa",
  measurementId: "G-1M9ELZPT6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)

