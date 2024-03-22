'use client'
import { useState } from "react"

/**
 * Read and update states stored in localeStorage.
 * @param  {string} key State key value.
 * @param {City | []} initialValue Value to initialize the state with, if it doesn't exist.
 * @returns A state value, and a function to update it.
 */
const useLocalStorage = (key: string, initialValue: City[] | []) => {
    const [state, setState] = useState(() => {
        //Initialize the state
        try {
            const value = typeof window !== 'undefined' && window.localStorage.getItem(key);
            // Check if the local storage already has any values,
            // otherwise initialize it with the passed initialValue
            return value ? JSON.parse(value) : initialValue;
        } catch(error) {
            console.error(error);
        }
    });

    const setValue = (value: any) => {
        try {
            // If the passed value is a callback function,
            //  then call it with the existing state.
            const valueToStore = value instanceof Function ? value(state) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
        } catch(error) {
            console.error(error);
        }
    }

    return [state, setValue];
}

export default useLocalStorage;