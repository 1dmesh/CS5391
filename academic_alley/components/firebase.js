import firebase_app from "@/config/firebase";
import { 
  getAuth, 
  onAuthStateChanged,
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  signInWithEmailAndPassword,
  signInWithPopup 
} from "firebase/auth";

function authInstance() {
  //const app = initializeApp(firebaseConfig);
  const auth = getAuth(firebase_app);
  return auth
};

function userInstance() {
  const [user, setUser] = useState();
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

function signInWithGooglePopup() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authInstance(), provider, browserPopupRedirectResolver)
    .then((result) => {
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
      console.log(error)
    });
}

module.exports = {
  authInstance,
  userInstance,
  signin,
  signInWithGooglePopup,
  signup
}