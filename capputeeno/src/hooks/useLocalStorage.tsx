import { useState } from "react";

export function useLocalStore<T>(item: string) {
    const [value, setValue] = useState(() => {
      const storedItem = localStorage.getItem(item);
      return storedItem ? JSON.parse(storedItem) : '';
    });

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return{
        value,
        updateLocalStorage
    }
}