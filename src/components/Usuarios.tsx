import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

const Usuarios = () => {
  const { Data, getUsers, nextPage, lastPage } = useUsuarios();

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td>
          <img src={usuario.avatar} alt="avatar" />
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>{Data.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button
        className="btn btn-primary"
        onClick={() => {
          lastPage();
        }}
      >
        Anterior
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          nextPage();
        }}
      >
        Siguiente
      </button>
    </>
  );
};

export default Usuarios;
