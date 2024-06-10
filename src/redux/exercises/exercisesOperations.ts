import { auth, db } from "../config";
import { exercisesSlice } from "./exercisesReduser";

interface setNumberOfApproachesProps {
  exercise: string;
  quantity: number;
  weight: number;
}

const { setNumberOfApproach } = exercisesSlice.actions;

export const setNumberOfApproaches =
  ({ exercise, quantity, weight }: setNumberOfApproachesProps) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "exercise/setNumberOfApproach";
    }) => void,
    getState: any
  ) => {
    try {
      // const { user } = await createUserWithEmailAndPassword(
      //   auth,
      //   userEmail,
      //   password
      // );

      dispatch(setNumberOfApproach({ exercise, quantity, weight }));
    } catch (error) {
      throw error;
    }
  };
