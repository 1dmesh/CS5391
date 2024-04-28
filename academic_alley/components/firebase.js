import React from "react";
import { 
  getAuth, 
  onAuthStateChanged,
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  signInWithEmailAndPassword,
  signInWithPopup 
} from "firebase/auth";

import firebase_app from "@/config/firebase";

export function authInstance() {
  //const app = initializeApp(firebaseConfig);
  const auth = getAuth(firebase_app)
  return auth
};

export async function signin(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(authInstance(), email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export function logout() {
  authInstance().signOut().then(function() {
  }, function(error) {
    console.error(error)
  });
}

export async function signup(email, password) {
  let result = null,
      error = null;
  try {
      result = await createUserWithEmailAndPassword(authInstance(), email, password);
  } catch (e) {
      error = e;
  }

  return { result, error }; 
}

export async function signInWithGooglePopup() {
  const provider = new GoogleAuthProvider();
  var res = null;
  await signInWithPopup(authInstance(), provider, browserPopupRedirectResolver)
    .then((result) => {
      res = result;
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
      console.log(error)
    });
  return res
}

module.exports = {
  authInstance,
  signin,
  logout,
  signInWithGooglePopup,
  signup
}