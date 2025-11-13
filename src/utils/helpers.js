// sleep function
export const wait = (ms) => {
  new Promise((resolve) => setTimeout(resolve, ms));
};

// remove empty keys from an object
export const cleanObject = (obj) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
      result[key] = obj[key];
    }
  });

  return result;
};
