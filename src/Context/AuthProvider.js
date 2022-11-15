import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login user with google
  const loginUserWithGoogle = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  //user email varify through valid mail
  const userEmailVerification = (email) => {
    return sendEmailVerification(auth.currentUser);
  };

  //reset user password through email
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //login user observer
  useEffect(() => {
    const unsubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      console.log("Inside onAuthStateChanged", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribeUser();
  }, []);

  const authInfo = {
    user,
    setLoading,
    createUser,
    loginUser,
    loginUserWithGoogle,
    logOutUser,
    userEmailVerification,
    resetUserPassword,
  };
  return (
    <AutheContext.Provider value={authInfo}>{children}</AutheContext.Provider>
  );
};

export default AuthProvider;
