import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

export const AutheContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const providerGoogle = new GoogleAuthProvider();

  //create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user with email and password
  const logingUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login user with google
  const loginUserWithGoogle = () => {
    return signInWithPopup(auth, providerGoogle);
  };
  const authInfo = {
    user,
    setLoading,
    createUser,
    logingUser,
    loginUserWithGoogle,
  };
  return (
    <AutheContext.Provider value={authInfo}>{children}</AutheContext.Provider>
  );
};

export default AuthProvider;
