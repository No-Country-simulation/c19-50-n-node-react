import { useEffect, useState } from 'react';

const useDebounce = (value) => {
  const [debounceValue, setDebounceValue] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== null) setDebounceValue(value);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return [debounceValue];
};

export default useDebounce;
