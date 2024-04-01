import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/Config";

// I have used chatgpt from 5 to 20 line number
// function to add AddAirCraft in firebase collection aircraft
// here is gpt prompt: Write a function in which we are adding collection to the firestore we are adding name and capacity inside a document
export const AddAirCraft = async (form) => {
  const { capacity, name } = form;
  const collRef = collection(db, "aircrafts");
  try {
    const docRef = await addDoc(collRef, {
      name: name,
      capacity: capacity,
    });
    console.log(docRef, "docRef");
    return { res: true };
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};
// function to add Add Airport in firebase collection aircraft
export const AddAirport = async (form) => {
  const { name, country } = form;
  const collRef = collection(db, "airports");
  try {
    const docRef = await addDoc(collRef, {
      name: name,
      country: country,
    });
    console.log(docRef, "docRef");
    return { res: true };
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};
// function to add Add Flight in firebase collection aircraft

export const AddFlight = async (form) => {
  const collRef = collection(db, "flights");
  try {
    const docRef = await addDoc(collRef, form);
    console.log(docRef, "docRef");
    return { res: true };
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};

// function to add Add Booking in firebase collection aircraft

export const AddFlightBooking = async (form) => {
  const collRef = collection(db, "bookFlights");
  try {
    const docRef = await addDoc(collRef, form);
    console.log(docRef, "docRef");
    return { res: true };
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};

// function to add Add Contact in firebase collection aircraft

export const AddContactForm = async (form) => {
  const collRef = collection(db, "Contact");
  try {
    const docRef = await addDoc(collRef, form);
    console.log(docRef, "docRef");
    return { res: true };
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};
