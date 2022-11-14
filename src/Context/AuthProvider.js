import React from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";
import { useState } from "react";

export const AutheContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const authInfo = { user };
  return (
    <AutheContext.Provider value={authInfo}>{children}</AutheContext.Provider>
  );
};

export default AuthProvider;
