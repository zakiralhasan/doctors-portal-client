import React from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

export const AutheContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //create new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user with email and password
  const logingUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, createUser, logingUser };
  return (
    <AutheContext.Provider value={authInfo}>{children}</AutheContext.Provider>
  );
};

export default AuthProvider;
