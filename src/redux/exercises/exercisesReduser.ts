import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: {},
};

export const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setNumberOfApproach: (state, { payload }) => ({
      exercises: {
        ...state.exercises,
        [payload.exercise]: [payload.quantity, payload.weight],
      },
    }),
  },
});
