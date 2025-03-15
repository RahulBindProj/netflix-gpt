export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})*$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isPasswordValid = /""/.test(password);
  if (!isEmailValid) return "EmailID is not valid";
  if (!isNameValid) return "Full Name is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
