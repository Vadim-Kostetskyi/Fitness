export const handleFocus = (set) => () => {
  set(true);
};

export const handleBlur = (set) => () => {
  set(false);
};
