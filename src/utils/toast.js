import { toast } from "react-toastify";

// default toast setting
const defaultOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

const Toast = {
  success: (message) => {
    toast.success(message, defaultOptions);
  },

  error: (message) => {
    toast.error(message, defaultOptions);
  },

  warning: (message) => {
    toast.warning(message, defaultOptions);
  },

  info: (message) => {
    toast.info(message, defaultOptions);
  },

  default: (message) => {
    toast(message, defaultOptions);
  },
};

export default Toast;
