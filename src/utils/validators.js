export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// password must be 6+ chars
export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

// check empty fields
export const isEmpty = (value) => {
  return value === null || value === undefined || value === "";
};

// valid required object filed
export const validateFields = (obj, fileds) => {
  for (let filed of fileds) {
    if (!obj[filed]) return `${fileds} is required`;
  }

  return null;
};
