import { getDatabase } from 'firebase/database';
import { app } from '../app/firebase';
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    updatePassword,
    signInWithPhoneNumber,
    getAuth,
  } from "firebase/auth";
  
const auth = getAuth(app);
const db = getDatabase(app);

export function firebaseObjectToArray(snapshot) {
  if (snapshot) {
    return Object.entries(snapshot).map(e => Object.assign({}, e[1], { id: e[0] }))
  }
}

export function signInWithEmail(creds) {
  return signInWithEmailAndPassword(auth, creds.email, creds.password);
}


// export function signInWithPhone(creds:any) {
//   return signInWithPhoneNumber(auth, creds);
// }

export function signOutFirebase() {
    return signOut(auth);
  }
  
  export async function registerInFirebase(creds) {
    try {
      const result = await createUserWithEmailAndPassword(auth, creds.email, creds.password);
      await updateProfile(result.user, {
        displayName: creds.displayName
      });
      return await setUserProfileData(result.user);
    } catch (error) {
      throw error;
    }
  }
  
export async function socialLogin(selectedProvider) {
  let provider;
  if (selectedProvider === 'facebook') {
      provider = new FacebookAuthProvider();
  }
  if (selectedProvider === 'google') {
      provider = new GoogleAuthProvider();
  }
  try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result._tokenResponse.isNewUser) {
          await setUserProfileData(result.user);
      }
  } catch (error) {
      // toast.error(error.message);
      console.log(error.message);
  }
}

export function updateUserPassword(creds) {
  const user = auth.currentUser;
  console.log(`updateUserPassword :${creds.password} `)
  return updatePassword(user, creds.password);
}

export function uploadToFirebaseStorage(file, filename) {
  const user = auth.currentUser;
  const storage = getStorage(app);
  const storageRef = ref(storage, `${user.uid}/user_images/${filename}`);
  return uploadBytesResumable(storageRef, file);
}
