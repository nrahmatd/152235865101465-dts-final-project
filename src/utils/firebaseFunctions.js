import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new Item
export const saveItem = async (data) => {
  // await setDoc(doc(firestore, 'GameDB', `${Date.now()}`), data, {
  //   merge: true,
  // });
  await addDoc(collection(firestore, 'GameDB'), data);
};

// getall Game items
export const getAllGameDB = async () => {
  const items = await getDocs(
    query(collection(firestore, 'GameDB'), orderBy('created_at', 'desc'))
  );

  return items.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
};

// get Game item by id
export const getGameItemById = async (id) => {
  try {
    const docRef = doc(firestore, 'GameDB', id);
    const item = await getDoc(docRef).then((doc) => doc.data());
    return item;
  } catch (error) {
    console.log(error);
  }
};

// get user by id
export const getUserById = async (id) => {
  const user = await getDocs(query(collection(firestore, 'users'), doc(id)));

  return user.docs.map((doc) => doc.data());
};
