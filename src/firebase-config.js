import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBvLzPfOGAWm0-oeFMznRJqVxP79R4L70k",
    authDomain: "ecommerce-headphones.firebaseapp.com",
    projectId: "ecommerce-headphones",
    storageBucket: "ecommerce-headphones.appspot.com",
    messagingSenderId: "1098716983504",
    appId: "1:1098716983504:web:baede55e8226cedc63aed5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)