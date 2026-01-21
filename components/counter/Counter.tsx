"use client";
import { useCounter } from "@/context/CounterProvider";
import React from "react";
import { Button } from "../ui/button";

const Counter = () => {
  const { count, increment } = useCounter();
  return (
    <div>
      Counter
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default Counter;
