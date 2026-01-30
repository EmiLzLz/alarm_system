/**
 * The `useSmartPolling` function in TypeScript is used to implement smart polling functionality in
 * React components.
 * @param {SmartPolling}  - The `useSmartPolling` function takes an object as a parameter with the
 * following properties:
 * @returns The `useSmartPolling` custom hook is returning an object with a `forceRefresh` function.
 */
import { useEffect, useRef } from "react";
import type { SmartPolling } from "../types/SmartPolling";

export function useSmartPolling({ fetchFunctions, interval }: SmartPolling) {
  const intervalRef = useRef<number | null>(null);

  //setIntervall Polling
  useEffect(() => {
    fetchFunctions.forEach((fn) => fn());

    intervalRef.current = setInterval(() => {
      fetchFunctions.forEach((fn) => fn());
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchFunctions, interval]);

  // Page visibility API
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        fetchFunctions.forEach((fn) => fn());
        intervalRef.current = setInterval(() => {
          fetchFunctions.forEach((fn) => fn());
        }, interval);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [fetchFunctions, interval]);

  // forcerefresh function
  function forceRefresh() {
    fetchFunctions.forEach((fn) => fn());
  }

  return {
    forceRefresh,
  };
}
