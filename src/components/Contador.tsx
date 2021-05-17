import { useState } from "react";

const Contador = () => {
  const [Counter, setCounter] = useState(0);

  const acumular = (value: number) => {
    setCounter(Counter + value);
  };

  return (
    <>
      <h3>
        Contador <small>{Counter}</small>
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

export default Contador;
