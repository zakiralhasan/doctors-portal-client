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
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); //used for theme change
  const [user, setUser] = useState(); //used for store logged user's information
  const [loading, setLoading] = useState(true); //used for loading state
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

  //take user name, photo URL etc. during registration
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //logout user
  const logOutUser = () => {
    return signOut(auth);
  };

  //user email varify through valid mail
  const userEmailVerification = () => {
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
    theme,
    setTheme,
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    loginUserWithGoogle,
    updateUserProfile,
    logOutUser,
    userEmailVerification,
    resetUserPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
