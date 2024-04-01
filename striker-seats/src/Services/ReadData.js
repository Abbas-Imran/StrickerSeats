import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { db } from "../Firebase/Config";
import toast from "react-hot-toast";

// this function is used to get data from user passed collection 
export const getData = async (collName) => {
  console.log(collName, "collction");
  const collRef = collection(db, collName);
  try {
    const snapDoc = await getDocs(collRef);
    const docsData = snapDoc.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return docsData;
  } catch (error) {
    console.log("error", error);
  }
};

// special function to get specific flight only 
export const getSpcecificFlight = async (id) => {
  console.log(id, "idServices");
  const collRef = doc(db, "flights", id);
  try {
    const snapDoc = await getDoc(collRef);

    return snapDoc.data();
  } catch (error) {
    console.log("error", error);
  }
};

export const userBookFlights = async (id) => {
  if (id) {
    let temp = [];
    const q = query(collection(db, "bookFlights"), where("userId", "==", id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      temp.push({ ...doc.data(), id: doc.id });
    });
    return temp;
  }
};

export const getUserById = async (id) => {
  let temp;
  const q = query(collection(db, "users"), where("uid", "==", id));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    temp = doc.data();
  });
  return temp;
};
export const updateTotalSeats = async (totalSeats, docId) => {
  const washingtonRef = doc(db, "flights", docId);
  const docData = (await getDoc(washingtonRef)).data();
  const seats = docData.aircraft.capacity;
  console.log(seats);
  if (seats === 0) {
    toast.error("There is no sets available");
    return;
  }
  if (totalSeats > 12 || totalSeats === 0 || totalSeats > seats) {
    toast.error(
      "Cant Select more then 12 or less then 1 seats Or Check the total Seats"
    );
    return;
  }

  const remainingSeats = seats - totalSeats;

  await updateDoc(washingtonRef, {
    "aircraft.capacity": remainingSeats,
  });

  return true;
};
