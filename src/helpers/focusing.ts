import { Dispatch, SetStateAction } from "react";

export const activate = (set: Dispatch<SetStateAction<boolean>>) => () => {
  set(true);
};

export const deactivate = (set: Dispatch<SetStateAction<boolean>>) => () => {
  set(false);
};
