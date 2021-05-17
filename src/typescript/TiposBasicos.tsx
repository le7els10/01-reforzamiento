const TiposBasicos = () => {
  let name: string = "juan";
  const edad: number = 23;
  const status = true;
  const poderes: string[] = ["Velocidad", "Fuerza", "Invisibilidad"];
  return (
    <>
      <h3>Tipos básicos</h3>
      {name} , {edad} , {status ? "Activo" : "nel"}
      <br />
      {poderes.join(", ")}
    </>
  );
};

export default TiposBasicos;
