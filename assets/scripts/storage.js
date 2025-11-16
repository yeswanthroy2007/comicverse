const STORAGE_NAMESPACE = "comicverse";

const getKey = (key) => `${STORAGE_NAMESPACE}:${key}`;

export const readStorage = (key, fallback = null) => {
  try {
    const raw = window.localStorage.getItem(getKey(key));
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn("Storage read failed", error);
    return fallback;
  }
};

export const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(getKey(key), JSON.stringify(value));
  } catch (error) {
    console.warn("Storage write failed", error);
  }
};

export const clearStorage = (key) => {
  try {
    window.localStorage.removeItem(getKey(key));
  } catch (error) {
    console.warn("Storage clear failed", error);
  }
};
