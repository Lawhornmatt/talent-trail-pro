import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/*
// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_FIREBASE_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_FIREBASE_PUBLIC_PROJ_ID,
  storageBucket: process.env.NEXT_FIREBASE_PUBLIC_STOR_BUCKET,
  messagingSenderId: process.env.NEXT_FIREBASE_PUBLIC_MESS_SEND_ID,
  appId: process.env.NEXT_FIREBASE_PUBLIC_APP_ID
};
*/

const firebaseConfig = {
    apiKey: "AIzaSyAv7nC4QopFBZtjatMFSgjHAPZjabcJIhQ",
    authDomain: "talent-trail-pro.firebaseapp.com",
    projectId: "talent-trail-pro",
    storageBucket: "talent-trail-pro.appspot.com",
    messagingSenderId: "779568108313",
    appId: "1:779568108313:web:f186724b995ef13a186b88"
};

// Initialize Firebase (modified for server side)
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// const auth = getAuth;

// export { app, auth };

const app = initializeApp(firebaseConfig);

export default app;