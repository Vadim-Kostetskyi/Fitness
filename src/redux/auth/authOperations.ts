import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../config";
import { authSlice } from "./authReduser";

interface registerDBProps {
  userEmail: string;
  password: string;
  nickname: string;
  avatar: string;
}

interface loginDBProps {
  userEmail: string;
  password: string;
}

const { authSignOut, updateUserProfile, authStateChanges } = authSlice.actions;

export const registerDB =
  ({ userEmail, password, nickname, avatar }: registerDBProps) =>
  async (
    dispatch: (arg0: { payload: any; type: "auth/updateUserProfile" }) => void,
    getState: any
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userEmail,
        password
      );

      await updateProfile(user, { displayName: nickname, photoURL: avatar });

      if (!auth) {
        return;
      }

      const currentUser = await auth.currentUser;

      if (currentUser) {
        const { uid, displayName, email, photoURL } = currentUser;

        dispatch(
          updateUserProfile({
            userId: uid,
            nickname: displayName,
            email,
            photoURL,
          })
        );
      }
    } catch (error) {
      throw error;
    }
  };

export const authStateChanged =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "auth/updateUserProfile" | "auth/authStateChanges";
    }) => void,
    getState: any
  ) => {
    try {
      await onAuthStateChanged(auth, (user) => {
        auth.onAuthStateChanged((user) => {
          if (!user) {
            return;
          }
          const userUpdateProfile = {
            nickname: user.displayName,
            userId: user.uid,
            email: user.email,
            photoURL: user.photoURL,
          };
          dispatch(updateUserProfile(userUpdateProfile));
          dispatch(authStateChanges({ stateChange: true }));
        });
      });
    } catch (error) {
      throw error;
    }
  };

export const userProfileUpdate =
  (update: any) =>
  async (
    dispatch: (arg0: { payload: any; type: "auth/updateUserProfile" }) => void,
    getState: any
  ) => {
    try {
      const user = await auth.currentUser;

      if (!user) {
        return;
      }

      await updateProfile(user, update);

      const currentUser = await auth.currentUser;

      if (currentUser) {
        const { uid, displayName, email, photoURL } = currentUser;

        dispatch(
          updateUserProfile({
            userId: uid,
            nickname: displayName,
            email,
            photoURL,
          })
        );
      }
    } catch (error) {
      throw error;
    }
  };

export const loginDB =
  ({ userEmail, password }: loginDBProps) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "auth/updateUserProfile" | "auth/authStateChanges";
    }) => void,
    getState: any
  ) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        userEmail,
        password
      );

      const currentUser = await auth.currentUser;

      if (currentUser) {
        const { uid, displayName, email, photoURL } = currentUser;
        dispatch(
          updateUserProfile({
            userId: uid,
            nickname: displayName,
            email,
            photoURL,
          })
        );
      }
      dispatch(authStateChanges({ stateChange: true }));
    } catch (error) {
      throw error;
    }
  };

export const authSignOutUser =
  () =>
  async (
    dispatch: (arg0: { payload: undefined; type: "auth/authSignOut" }) => void,
    getState: any
  ) => {
    dispatch(authSignOut());
  };
