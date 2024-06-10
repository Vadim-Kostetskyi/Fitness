import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: {},
};

export const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setNumberOfApproach: (state, { payload }) => (
      console.log(111),
      console.log("payload", payload),
      console.log("state", state),
      console.log(112),
      console.log(payload.exercise),
      console.log(payload.quantity),
      console.log(1),
      // console.log(state.exercises[payload.exercise]),
      // console.log([payload.exercise]: payload.quantit),
      {
        exercises: {
          ...state.exercises,
          [payload.exercise]: [payload.quantity, payload.weight],
        },
      }
    ),
    // updateUserProfile: (state, { payload }) => ({
    //   ...state,
    //   userId: payload.userId,
    //   nickname: payload.nickname,
    //   email: payload.email,
    //   photoURL: payload.photoURL,
    // }),
    // authStateChanges: (state, { payload }) => ({
    //   ...state,
    //   isLogIn: payload.stateChange,
    // }),
    // authSignOut: (state) => ({
    //   ...initialState,
    // }),
  },
});
