export const persistLocalStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = (key: string, storage: Storage) => {
  sessionStorage.removeItem(key);
};
