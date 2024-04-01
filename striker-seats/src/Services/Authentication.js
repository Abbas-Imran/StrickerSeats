/* eslint-disable */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";
import { auth, db } from "../Firebase/Config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";


// I have used chatgpt from 20 to 79 
// Here is the chatgpt prompt: 
// Create me a firebase authentication function for react js which include login and signup also add authentication data to firestore as well.
export const SignUpFirebase = async (obj) => {

  // login Signup object 
  const { name, email, password } = obj;

  try {
    console.log({email,password});
    // create a user form firebase function 
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
      //if use is created successfully update profule to add name and phonenumber
    if (user) {
      await updateProfile(user, {
        displayName: name,
      });
      //add users addad in firestore to save them
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        uid: user.uid,
      });

      return { res: true };
    }
  } catch (error) {
    console.error(error);

    return { res: false };
  }
};

//login firebase
export const LoginFirebase = async (obj) => {
  // firebase email and password 
  const { email, password } = obj;

  try {
    // create firebase email and password 
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);

    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error(error);

    const errorCode = error.code;
    const errorMessage = error.message;

    return { success: false, errorCode, errorMessage };
  }
};

export const LogoutFirebase = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};
