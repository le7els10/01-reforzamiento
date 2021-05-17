interface Persona {
  name: string;
  apellido: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casa: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    name: "juan",
    apellido: "",
    edad: 23,
    direccion: {
      pais: "Colombia",
      casa: 79,
    },
  };

  //con ts fallara si un dato no estaba en el objeto original
  persona.apellido = "nuñez";

  return (
    <>
      <h3>Objetos Literales</h3>
      {JSON.stringify(persona)}
    </>
  );
};

export default ObjetosLiterales;
