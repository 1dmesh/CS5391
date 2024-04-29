import { 
  getAuth, 
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  signInWithEmailAndPassword,
  signInWithPopup 
} from "firebase/auth";
import firebase_app from "@/config/firebase";

export function authInstance() {
  const auth = getAuth(firebase_app)
  return auth
};

export async function signin(email, password) {
  let result = null, error = null;
  try {
    result = await signInWithEmailAndPassword(authInstance(), email, password);
  } catch (e) {
    console.error(e)
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
  let result = null, error = null;
  try {
    result = await createUserWithEmailAndPassword(authInstance(), email, password);
  } catch (e) {
    console.error(e)
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