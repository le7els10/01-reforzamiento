import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const ContadorHook = () => {
  const { Counter, acumular } = useCounter();

  return (
    <>
      <h3>
        Contador hook <small>{Counter}</small>
      </h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          acumular(1);
        }}
      >
        +1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={() => {
          acumular(-1);
        }}
      >
        -1
      </button>
    </>
  );
};

export default ContadorHook;
