import Counter from "@/components/counter/Counter";
import { CounterProvider } from "@/context/CounterProvider";
import React from "react";

const page = () => {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default page;
