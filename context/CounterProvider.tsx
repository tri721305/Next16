"use client";
import React, { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
};

// Create a global context (provide undefined as default and use a typed generic)
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Create a provider to manage global state
const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  // Global state variable 'count'
  const [count, setCount] = useState(0);

  // Update global state 'count'
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return <CounterContext.Provider value={{ count, increment }}>{children}</CounterContext.Provider>;
};

// Custom hook to access global state and updater
const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export { CounterProvider, useCounter };
