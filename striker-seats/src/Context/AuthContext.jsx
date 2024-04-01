"use client";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Config";

// Create a context for authentication
export const AuthContext = createContext();

// Authentication context provider component
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  // State to store the current user
  const [currentUser, setCurrentUser] = useState(null);

  // Effect to subscribe to authentication state changes
  useEffect(() => {
    // Unsubscribe function for the auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Update current user state
      setCurrentUser(user);
      console.log(user);
    }, (error) => {
      console.error("Authentication error:", error); // Log any authentication errors
    });

    // Clean up function to unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide the authentication context to children components
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
