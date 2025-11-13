const storage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get: (key) => {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  },
};

export default storage;