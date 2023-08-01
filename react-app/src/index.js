import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import ContextProvider from "./Context";

const firebaseConfig = {
  apiKey: "AIzaSyBkZdDeKGgnKXzAu-RWrDGQAQBG-x3D334",
  authDomain: "music-player-final-project.firebaseapp.com",
  projectId: "music-player-final-project",
  storageBucket: "music-player-final-project.appspot.com",
  messagingSenderId: "226920662966",
  appId: "1:226920662966:web:b556085bc0ad517f436317",
  measurementId: "G-VJ2MW5G87J",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
connectAuthEmulator(auth, process.env.REACT_APP_FIREBASE_AUTH_HOST);
connectFirestoreEmulator(
  firestore,
  process.env.REACT_APP_FIREBASE_FIRESTORE_HOST
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
