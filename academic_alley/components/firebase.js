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

function authInstance() {
  //const app = initializeApp(firebaseConfig);
  const auth = getAuth(firebase_app);
  return auth
};

function userInstance() {
  const [user, setUser] = React.useState();
  onAuthStateChanged(authInstance(), (user) => {
    setUser(user)
  });
  return user
}

async function signin(email, password) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(authInstance(), email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

function logout() {
  authInstance().signOut().then(function() {
  }, function(error) {
    console.error(error)
  });
}

async function signup(email, password) {
  let result = null,
      error = null;
  try {
      result = await createUserWithEmailAndPassword(authInstance(), email, password);
  } catch (e) {
      error = e;
  }

  return { result, error }; 
}

async function signInWithGooglePopup() {
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
  userInstance,
  signin,
  logout,
  signInWithGooglePopup,
  signup
}