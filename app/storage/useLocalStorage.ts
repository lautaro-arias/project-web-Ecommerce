export const saveToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const  addToLocalStorage = <Product>(key: string, value: Product): void => {
  try {
    const storedValue = getFromLocalStorage(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];
    const newValue = [...parsedValue, value];
    saveToLocalStorage(key, newValue);
    getFromLocalStorage(key);

  } catch (error) {
    console.error("Error handling localStorage:", error);
  }
}

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};