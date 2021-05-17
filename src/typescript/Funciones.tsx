const Funciones = () => {
  const sumar = (a: number, b: number = 0) => {
    return a + b;
  };

  return (
    <>
      <h3>Fuunciones</h3>
      El resultado es {sumar(1)}
    </>
  );
};

export default Funciones;
