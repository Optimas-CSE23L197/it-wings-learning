// capitalize first letter
export const capitalize = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// format date to readable
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};
