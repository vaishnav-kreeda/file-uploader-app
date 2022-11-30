import { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth, db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const clear = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      clear();
    };
  }, []);

  const logOut = () => {
    signOut(auth);
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      //   setDoc(doc(db, "usersFile", user.uid), { Files: [] });
    });
  };
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, googleLogin, logOut, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
