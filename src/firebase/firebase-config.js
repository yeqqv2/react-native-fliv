import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6OiBhvjb1UF2zQTjgOPZxVJndNQdfzYA",
    authDomain: "react-native-fliv.firebaseapp.com",
    projectId: "react-native-fliv",
    storageBucket: "react-native-fliv.appspot.com",
    messagingSenderId: "369001692532",
    appId: "1:369001692532:web:2691f575fbbc38ff76c021",
    measurementId: "G-TQX9CNFQXS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;