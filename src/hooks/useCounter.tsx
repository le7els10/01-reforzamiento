import { useState } from "react";

export const useCounter = () => {
  const [Counter, setCounter] = useState(0);

  const acumular = (value: number) => {
    setCounter(Counter + value);
  };

  return { Counter, acumular };
};
