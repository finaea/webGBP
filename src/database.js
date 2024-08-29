import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Default profile picture URL
const DEFAULT_PROFILE_PIC_URL = "https://example.com/default-profile-pic.png";

// Function to create a new user and store their data in Firestore
export const registerUser = async (name, email, password, profilePic = DEFAULT_PROFILE_PIC_URL) => {
  try {
    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with name and profile picture
    await updateProfile(user, {
      displayName: name,
      photoURL: profilePic
    });

    // Save additional user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      profilePic,
      points: 10// Initialize points to 0
    });

    console.log("User registered and data saved successfully.");
    return { success: true };
  } catch (error) {
    console.error("Error registering user: ", error);
    return { success: false, error: error.message };
  }
};

// Function to get user data from Firestore
export const getUserData = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
  }
};

export { app, auth, db, DEFAULT_PROFILE_PIC_URL };