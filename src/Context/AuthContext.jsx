import { createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase.js";

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
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
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
