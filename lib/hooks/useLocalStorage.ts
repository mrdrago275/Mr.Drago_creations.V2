'use client';

import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return initialValue;
      }

      return JSON.parse(item) as T;
    } catch (error) {
      console.error(
        `Error reading localStorage key "${key}"`,
        error
      );

      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error(
        `Error saving localStorage key "${key}"`,
        error
      );
    }
  }, [key, value]);


  const updateValue = useCallback(
    (
      newValue:
        | T
        | ((previousValue: T) => T)
    ) => {
      setValue((previousValue) => {
        const nextValue =
          typeof newValue === 'function'
            ? (
                newValue as (
                  prev: T
                ) => T
              )(previousValue)
            : newValue;


        if (typeof window !== 'undefined') {
          try {
            window.localStorage.setItem(
              key,
              JSON.stringify(nextValue)
            );
          } catch {
            // Ignore storage errors
          }
        }

        return nextValue;
      });
    },
    [key]
  );


  return [
    value,
    updateValue,
  ] as const;
}
