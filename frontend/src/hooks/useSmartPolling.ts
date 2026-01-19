import { useEffect, useRef, useState } from "react";
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
  function forcerefresh() {
    fetchFunctions.forEach((fn) => fn());
  }

  return {
    forcerefresh,
  };
}
