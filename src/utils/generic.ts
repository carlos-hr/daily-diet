export const generateId = () => {
  return Math.floor(Math.random() + new Date().getTime()).toString();
};
