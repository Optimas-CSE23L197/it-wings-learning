export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

export const isValidName = (name) => {
  return typeof name === "string" && name.trim().length >= 3;
};

export const isValidPhoneNumber = (phoneNumber) => {
  return /^\d{10}$/.test(phoneNumber);
};

export const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

export const validateFields = (obj, fields) => {
  for (let field of fields) {
    if (!obj[field]) return `${field} is required`;
  }
  return null;
};
