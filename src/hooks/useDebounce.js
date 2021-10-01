import { useEffect, useRef, useState } from "react";

const emptyObj = {};

// https://usehooks.com/useDebounce/
// https://thewebdev.info/2021/03/14/how-to-use-the-react-useeffect-hook-with-debounce/
const useDebounce = (value, delay, options = emptyObj) => {
  const { leading = false } = options;
  const [debouncedValue, setDebouncedValue] = useState("");
  const firstDebounce = useRef(true);

  useEffect(() => {
    if (leading && firstDebounce.current && value) {
      setDebouncedValue(value);
      firstDebounce.current = false;
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, leading]);

  return debouncedValue;
};

export default useDebounce;
