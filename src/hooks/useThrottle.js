// https://react-hooks.org/docs/useThrottle
// https://github.com/imbhargav5/rooks/blob/main/src/hooks/useThrottle.ts
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * useThrottle
 * Throttles a function with a timeout and ensures
 * that the callback function runs at most once in that duration
 * Behaves as if {leading: true, trailing: true}
 *
 * @param fn The callback to throttle
 * @param timeout Throttle timeout
 */

const useThrottle = (fn, timeout = 300) => {
  const [ready, setReady] = useState(true);
  const timerRef = useRef(undefined);

  const throttledFunction = useCallback(
    (...args) => {
      if (!ready) {
        return;
      }
      setReady(false);
      fn(...args);
    },
    [ready, fn],
  );

  useEffect(() => {
    if (!ready) {
      timerRef.current = setTimeout(() => {
        setReady(true);
      }, timeout);
      return () => clearTimeout(timerRef.current);
    }
  }, [ready, timeout]);

  return [throttledFunction, ready];
}

export default useThrottle;

// https://stackoverflow.com/a/62017005/7082724

// import React, { useCallback, useEffect, useRef } from "react";
// import _ from "lodash";

// function useThrottle(cb, delay, additionalDeps) {
//   const options = { leading: true, trailing: false }; // lodash options
//   const cbRef = useRef(cb);
//   const throttledCb = useCallback(
//     _.throttle((...args) => cbRef.current(...args), delay, options),
//     [delay]
//   );
//   useEffect(() => {
//     cbRef.current = cb;
//   });
//   // set additionalDeps to execute effect, when other values change (not only on delay change)
//   useEffect(throttledCb, [throttledCb, ...additionalDeps]);
// }

// export default useThrottle;
