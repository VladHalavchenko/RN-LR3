import { v4 as uuid } from "uuid";
import db from "../firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export default class Database {
  static COLLECTION_NAME = "contacts";
  static async getELementByID(id) {
    const docRef = doc(db, this.COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  static async getAllElements() {
    const querySnapshot = await getDocs(collection(db, this.COLLECTION_NAME));
    const result = [];
    querySnapshot.forEach((doc) => {
      result.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return result;
  }

  static async saveToDB(element) {
    const id = uuid();
    await setDoc(doc(db, this.COLLECTION_NAME, id), element);
    return { id, ...element };
  }

  static async removeElementByID(id) {
    const data = await deleteDoc(doc(db, this.COLLECTION_NAME, id));
    return data;
  }
}
